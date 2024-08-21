

## 服务的共享网络

#### 创建

```shell
docker network create share-hobby-net 
```

#### 手动加入

```shell
docker network connect share-hobby-net xxx_service
```

## 进入容器

```shell
docker exec -it xxx_service bash
```

