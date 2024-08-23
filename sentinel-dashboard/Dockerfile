# 使用官方的 OpenJDK 镜像作为基础镜像
FROM openjdk:11-jre-slim

# 设置工作目录
WORKDIR /app

# 将 JAR 文件复制到工作目录
COPY sentinel-dashboard-1.8.2.jar /app/sentinel-dashboard.jar
# 开放端口 10901
EXPOSE 8080

# 运行 JAR 文件
CMD ["java", "-Dsentinel.dashboard.auth.username=root", "-Dsentinel.dashboard.auth.password=root.123456.", "-Dproject.name=sentinel-dashboard", "-jar", "sentinel-dashboard.jar"]