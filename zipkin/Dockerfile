# 使用官方的 OpenJDK 镜像作为基础镜像
FROM openjdk:11-jre-slim

# 设置工作目录
WORKDIR /app

# 将 JAR 文件复制到工作目录
COPY zipkin-server-2.23.9-exec.jar /app/zipkin-server.jar
# 开放端口 10901
EXPOSE 9411

# 运行 JAR 文件
CMD ["java", "-jar", "zipkin-server.jar" ,"--zipkin.collector.rabbitmq.uri=amqp://root:root.123456.@192.168.16.2:5672/vhost"]