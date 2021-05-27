# Import environment, can pass a different env as parameter
cnf ?= .env
include $(cnf)
export $(shell sed 's/=.*//' $(cnf))

##
## Development
##

dev-build:
	cd devops/dev && \
		docker-compose build

dev-run:
	cd devops/dev && \
		docker-compose up

dev-down:
	cd devops/dev && \
		docker-compose down

##
## Production
##

APP_NAME=reactive-gopher
HEROKU=registry.heroku.com/$(APP_NAME)
IMAGE_TAG=reactive-gopher:latest

prod-build:
	docker build -t $(IMAGE_TAG) .

prod-push:
	docker tag $(IMAGE_TAG) $(HEROKU)/web
	docker push $(HEROKU)/web

prod-release:
	heroku container:release web

prod-deploy:
	$(MAKE) prod-build
	$(MAKE) prod-push
	$(MAKE) prod-release

##
## General
##

clean:
	docker image prune
