name: Babel Build

on: [push]

jobs:
	build:

	runs-on: ubuntu-latest

	strategy:
		matrix:
			node-version: [10.x]

	steps:
	- uses: actions/checkout@v2
	- name: Use Node.js ${{ matrix.node-version }}
	  uses: actions/setup-node@v1
	  with:
		node-version: ${{ matrix.node-version }}
	- run: npm install
	- run: npm run build
	- run: npm run hooks
	  env:
		CI: true
