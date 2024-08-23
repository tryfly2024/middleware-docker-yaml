# 使用官方的 OpenJDK 镜像作为基础镜像
FROM openjdk:11-jre-slim

# 设置工作目录
WORKDIR /app

# 将 JAR 文件复制到工作目录
COPY sentinel-dashboard-1.8.2.jar /app/sentinel-dashboard.jar
COPY sentinel.properties /app/sentinel.properties
# 开放端口 10901
EXPOSE 8080

# 运行 JAR 文件
CMD ["java", "-Dcsp.sentinel.config.file=classpath:sentinel.properties", "-jar", "sentinel-dashboard.jar"]