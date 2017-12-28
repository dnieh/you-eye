.PHONY: start yarn parcel node

start:
	yarn install && \
	parcel watch && \
	node server.js
