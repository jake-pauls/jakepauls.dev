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
## Note: Heroku and Netlify both require CLIs for these commands to run locally
##

APP_NAME=reactive-gopher
HEROKU=registry.heroku.com/$(APP_NAME)
IMAGE_TAG=heroku-gopher:latest

# gopher - Heroku
gopher-build:
	docker build -t $(IMAGE_TAG) .

gopher-push:
	docker tag $(IMAGE_TAG) $(HEROKU)/web
	docker push $(HEROKU)/web

gopher-release:
	heroku container:release web

gopher-deploy:
	echo "Building prod container for $(APP_NAME)"
	$(MAKE) prod-build
	echo "Tagging and pushing containers to $(HEROKU)"
	$(MAKE) prod-push
	echo "Releasing containers to web dyno..."
	$(MAKE) prod-release
	echo "Cleaning hanging images..."
	$(MAKE) clean

# reactive - Netlify
reactive-build:
	cd reactive && \
		yarn build

reactive-deploy:
	$(MAKE) reactive-build
	cd reactive && \
		netlify deploy --dir=build --prod

# Publishes a draft version of the website
reactive-draft:
	$(MAKE) reactive-build
	cd reactive && \
		netlify deploy --dir=reactive/build


# Comprehensive deploy
reactive-gopher-deploy:
	$(MAKE) reactive-deploy
	$(MAKE) gopher-deploy

##
## General
##

clean:
	docker image prune
