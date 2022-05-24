docker ps ||| wyświetla wszystkie włączone kontenery
docker ps -a ||| wyświetla wszystkie kontenery
docker stop (idKontenera / nazwa) ||| wyłącza kontener
docker start (idKontenera / nazwa) ||| włącza kontener
docker pull ||| pobiera obraz
docker image ls ||| wyświetla wszystkie obrazy
docker run -e MYSQL_ROOT_PASSWORD=tajne mysql
docker rm (idKontenera / nazwa) ||| usuwa kontener
docker run busybox echo "hello world! I'm busybox!" ||| tworzy kontener i wypisuje message
docker run -it busybox ||| tworzy kontener i uruchamia powłoke bash
docker logs container_name ||| wypisuje komendy użyte wczesniej w powłoce bash kontenera
docker exec -it frosty_noether sh ||| uruchamia powłoke shell uruchomionego kontenera
docker exec -it ecstatic_neumann sh -c "echo 'created from outside' > file2.txt" ||| napisz do pliku spoza shella
docker create --name my_container9 busybox echo "witam" ||| tworzy kontener który wypisuje witam przy start -a
/////
docker network ls - wyświetla liste sieci
docker network inspect - wyświetla szczegółowe informacje o wybranej sieci
docker network rm - usuwa daną sięć
docker network create - tworzy nową sieć
/////
docker-compose -f docker-compose-dev.yml build --no-cache
docker compose -f docker-compose-dev.yml up
