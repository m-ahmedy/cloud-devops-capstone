## The Makefile includes instructions on environment setup and lint tests
# Install dependencies in package.json
# Dockerfile should pass hadolint
# App should pass unit tests

install:
	npm ci --silent

test:
	npm run test

lint:
	# See local hadolint install instructions:   https://github.com/hadolint/hadolint
	# This is linter for Dockerfiles
	hadolint dockerfile
	# This is a linting check
	npm run lint

all: install lint test