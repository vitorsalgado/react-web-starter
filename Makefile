.ONESHELL:
.DEFAULT_GOAL := help

# allow user specific optional overrides
-include Makefile.overrides

export

# Global Parameters
# ---
PROJECT := react-web-starter
DOCKER_NAME := PROJECT
NGINX_PORT := 3000
CONTEXT := $$(pwd)

# Help
# ---
.DEFAULT_GOAL := help
.PHONY: help
help:
	@awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z_-]+:.*?## / {printf "\033[36m%-20s\033[0m %s\n", $$1, $$2}' $(MAKEFILE_LIST)

start: ## Start Dev Server with Hot Reload
	@npm start

up: ## Run a development environment with Docker Compose.
	@docker-compose -f ./deployments/dev/docker-compose.yml up

down: ## Stop Docker Compose development environment.
	@docker-compose -f ./deployments/dev/docker-compose.yml down

dev-clean: ## Clean Docker Compose development environment.
	@docker-compose -f ./deployments/dev/docker-compose.yml down --remove-orphans --volumes

.PHONY: check
check:
	@npm run lint:ci
	@npm run test:ci
	@npm run test:e2e

.PHONY: fmt
fmt: # Format code
	@npm run fmt

.PHONY: lint
lint: # Lint code
	@npm run lint

.PHONY: dist
dist: ## Server dist/ with a nginx docker. Use -e NGINX_PORT parameter to change Nginx port. Defaults to 3000.
	@docker run -it --rm \
		-p $(NGINX_PORT):80 \
		--name web \
		-v $(CONTEXT)/dist:/usr/share/nginx/html -v $(CONTEXT)/config/nginx/nginx.conf:/etc/nginx/nginx.conf:ro \
		nginx

docker-build: ## Builds production Docker.
	@docker build --tag $(DOCKER_NAME) --file build/docker/Dockerfile .

docker-run: ## Run production Docker.
	@docker run --rm -p $(NGINX_PORT):80 --name $(DOCKER_NAME) $(DOCKER_NAME)
