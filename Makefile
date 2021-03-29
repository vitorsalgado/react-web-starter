SHELL := /bin/bash
PROJECT := react-web-starter

prepare-for-e2e-tests:
	docker build -t $(PROJECT) -f Dockerfile.test . && \
	docker run -d -v $$(pwd):/app --network=host --name $(PROJECT) -t $(PROJECT)

teardown-e2e-tests:
	docker rm -f $(PROJECT)

e2e-tests:
	npm run test:e2e

setup-mock:
	git clone https://github.com/vitorsalgado/wiremock-toolkit @mock_toolkit
	cd @mock_toolkit && npm i

run-mock:
	node @mock_toolkit/index mock
