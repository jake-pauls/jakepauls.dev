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
IMAGE_TAG=heroku-gopher:latest

prod-build:
	docker build -t $(IMAGE_TAG) .

prod-push:
	docker tag $(IMAGE_TAG) $(HEROKU)/web
	docker push $(HEROKU)/web

prod-release:
	heroku container:release web

heroku-deploy:
	echo "Building prod container for $(APP_NAME)"
	$(MAKE) prod-build
	echo "Tagging and pushing containers to $(HEROKU)"
	$(MAKE) prod-push
	echo "Releasing containers to web dyno..."
	$(MAKE) prod-release
	echo "Cleaning hanging images..."
	$(MAKE) clean

##
## General
##

clean:
	docker image prune
