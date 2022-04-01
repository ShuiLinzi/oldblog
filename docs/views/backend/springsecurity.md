---
title: springsecurity
---
## 认证
### 登录校验流程
![jwt流程](https://cdn.jsdelivr.net/gh/ShuiLinzi/blog-image@master/后端/jwt流程.webp)

### 思路分析
![流程2](https://cdn.jsdelivr.net/gh/ShuiLinzi/blog-image@master/后端/流程2.webp)
登录：
    1. 自定义登录接口
         调用ProviderManager的方法进行认证 如果认证通过生成jwt
         把用户信息存入redis中
    2. 自定义UserDetailService
        在这个实现类中查询数据库
检验：
    1. 定义jwt认证过滤器
        获取token
        解析token获取userid
        从redis中获取信息
        存入SecurityContextHolder中

## 自定义UserDetailService在这个实现类中查询数据库
我们可以自定义一个UserDetailsService，让springSecurity使用我们的UserDetailService，我们自己的UserDetailService可以从数据库中查询数据库用户名密码