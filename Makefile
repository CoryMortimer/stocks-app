build:
	docker build --tag stocks-image .

stop:
	-docker stop stocks
	-docker rm stocks

dev: stop build
	docker run -ti -p 4200:4200 --name stocks -v $(PWD):/usr/src/app stocks-image ng serve --host 0.0.0.0

prod: stop build
	docker run -ti --name stocks stocks-image
