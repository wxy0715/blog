# Nginx



## nginx进程模型

![image-20221111095852457](https://wxy-md.oss-cn-shanghai.aliyuncs.com/image-20221111095852457.png)



## Nginx的事件处理

**nginx采用异步非阻塞的方式处理客户端请求 并发量跟随服务器性能决定**

![image-20221111102214843](https://wxy-md.oss-cn-shanghai.aliyuncs.com/image-20221111102214843.png)

![image-20221111102245233](https://wxy-md.oss-cn-shanghai.aliyuncs.com/image-20221111102245233.png)



## Nginx配置

![image-20221111102609280](https://wxy-md.oss-cn-shanghai.aliyuncs.com/image-20221111102609280.png)

### root

当配置了root参数时：访问路径即为 root后的路径拼接location的路径 

第一种 访问根---->html/foodie-shop/index.html

第二种 访问imooc----> html/imooc

第三种起别名 访问static----> html/imooc

![image-20221116145929259](https://wxy-md.oss-cn-shanghai.aliyuncs.com/image-20221116145929259.png)

### gzip

![image-20221116152201988](https://wxy-md.oss-cn-shanghai.aliyuncs.com/image-20221116152201988.png)



### location

![image-20221116162946182](https://wxy-md.oss-cn-shanghai.aliyuncs.com/image-20221116162946182.png)

### 跨域

![image-20221116165011331](https://wxy-md.oss-cn-shanghai.aliyuncs.com/image-20221116165011331.png)

### 防盗链

![image-20221116165223860](https://wxy-md.oss-cn-shanghai.aliyuncs.com/image-20221116165223860.png)





## Nginx日志切割

编写一个sh脚本，在crontab里加一个每天执行一次的cron语句即可![image-20221111164415959](https://wxy-md.oss-cn-shanghai.aliyuncs.com/image-20221111164415959.png)





## 示例

```sh
worker_processes auto;
events {
    worker_connections  1024;
    accept_mutex on;
  }
http {
  include mime.types;
  default_type application/octet-stream;
  keepalive_timeout 120s;
  gzip on;
  gzip_min_length 8k;
  gzip_comp_level 4;
  client_max_body_size 1024m;
  client_header_buffer_size 32k;
  client_body_buffer_size 8m;
  server_names_hash_bucket_size 512;
  proxy_headers_hash_max_size 51200;
  proxy_headers_hash_bucket_size 6400;
  log_format main escape=json '{"remoteUser":"$remote_user","request":"$request","upstreamResponseTime":"$upstream_response_time","requestLength":"$request_length","httpUserAgent":"$http_user_agent","requestTime":"$request_time","httpHost":"$http_host","httpReferer":"$http_referer","remoteAddr":"$remote_addr","timeLocal":"$time_local","status":"$status","bodyBytesDent":"$body_bytes_sent"}';
  access_log /home/nginxWebUI/log/access.log main;
  proxy_connect_timeout 600s;
  proxy_read_timeout 600s;
  vhost_traffic_status_zone ;
  vhost_traffic_status_filter_by_host on;
  error_log /home/nginxWebUI/log/error.log;
  log_format escape=json '{"remoteUser":"$remote_user","request":"$request","upstreamResponseTime":"$upstream_response_time","requestLength":"$request_length","httpUserAgent":"$http_user_agent","requestTime":"$request_time","httpHost":"$http_host","httpReferer":"$http_referer","remoteAddr":"$remote_addr","timeLocal":"$time_local","status":"$status","bodyBytesDent":"$body_bytes_sent"}';
  server {
    server_name seaskysh.oicp.net;
    listen 80;
    location ~ ^/portainer/api/(.+)$  {
      proxy_pass http://192.168.1.80:9000/api/$1?$args;
      proxy_http_version 1.1;
      proxy_set_header Upgrade $http_upgrade;
      proxy_set_header Connection "upgrade";
    }
    location ~ "^/portainer(/?.*)" {
      proxy_pass http://192.168.1.80:9000$1$is_args$args;
      proxy_set_header Host $host:$server_port;
      proxy_set_header X-Real-IP $remote_addr;
      proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
      proxy_set_header X-Forwarded-Proto $scheme;
    }
    location /projectplan/ {
      proxy_pass http://192.168.1.80:8080/projectplan/;
      proxy_set_header Host $host:$server_port;
      proxy_set_header X-Real-IP $remote_addr;
      proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
      proxy_set_header X-Forwarded-Proto $scheme;
    }
    location /projectplanweb/index.html  {
      add_header Cache-Control "no-cache,no-store";
    }
    location ^~ /projectplanweb/ {
      try_files $uri /projectplanweb/index.html;
    }
  }
}
```

