docker-compose down
docker rmi zipkin-server:2.23.9
docker build -t zipkin-server:2.23.9 .