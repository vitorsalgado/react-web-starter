SHELL := /bin/bash
PROJECT := react-web-starter

mock-setup:
	git clone https://github.com/vitorsalgado/wiremock-toolkit @mock_toolkit
	cd @mock_toolkit && npm i

mock-run:
	node @mock_toolkit/index mock
