create:
	docker build . -t shopnowapi_image
delete:
	docker rmi shopnowapi_image
run:
	docker run -d -p 3000:3000 --name shopnowapi_container shopnowapi_image
stop:
	docker stop shopnowapi_container