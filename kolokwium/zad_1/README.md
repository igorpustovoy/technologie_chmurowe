docker network create kolokwium
docker build -t my_express . 
docker run --name curl_api --network=kolokwium -p 5000:5000 my_express
docker build -t my_alpine . 
docker run --name curl --network=kolokwium my_alpine -it sh