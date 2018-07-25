SHELL := /bin/bash
PROJECT := react.archetype

prepare-for-e2e-tests:
	docker build -t $(PROJECT) . && \
	docker run -d -v $$(pwd):/app --network=host --name $(PROJECT) -t $(PROJECT)

teardown-e2e-tests:
	docker rm -f $(PROJECT)

e2e-tests:
	npm run test:e2e
