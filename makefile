create:
	docker buildx build --platform linux/amd64,linux/arm64 . -t shopnowapi_image
delete:
	docker rmi shopnowapi_image
run:
	docker run -d -p 3000:3000 --name shopnowapi_container shopnowapi_image
stop:
	docker stop shopnowapi_container