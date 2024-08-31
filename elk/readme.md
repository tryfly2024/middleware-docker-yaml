

es 系统配置

vm.max_map_count 262144

```shell
# 临时，重启失效
sudo sysctl -w vm.max_map_count=262144

# 永久
sudo vim /etc/sysctl.conf
# add | update
vm.max_map_count=262144

# 生效
sudo sysctl -p

# 查验
sysctl vm.max_map_count
cat /proc/sys/vm/max_map_count

```

