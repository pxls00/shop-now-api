network-create:
	docker network create abu-net
create:
	docker build . -t shopnowapi_image
delete:
	docker rmi shopnowapi_image
up-app:
	docker run -d -p 3000:3000 --network abu-net -e MONGO_URI=mongodb --name shopnowapi_container shopnowapi_image
down-app:
	docker stop shopnowapi_container
rm-app:
	docker rm shopnowapi_container
up-mongo:
	docker run --network abu-net --name mongodb -d -p 27017:27017 -e MONGO_INITDB_DATABASE=admin mongo
down-mongo:
	docker stop mongodb
rm-mongo:
	docker rm mongodb