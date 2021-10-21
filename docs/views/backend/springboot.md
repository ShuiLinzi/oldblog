---
title: 重刷springboot(雷神) 学习笔记
data: 2021-10-19
tags: 
- Java
categories:
- "后端"
---
spring boot脑海里面已经记不得什么时候学的了，重刷这门课的时候之前也对着视频写了不少项目了，刷完谷粒商城这个大项目之后，突然觉得自己有必要回过头来重新学学boot了，而且最近有些许迷茫，具体的会在其他博客总结，总之不要让自己停下来，本文不是把所有的知识笔记一点一点的从头记录，而是查漏补缺，把常用而自己记得不太清楚的记下来
<!-- more -->
## @ConfigurationProperties
把配置文件里面的常量和JavaBean里面的变量进行绑定，注意@ConfigurationProperties和@Component两个注解缺一不可
```java
/**
 * 只有在容器中的组件，才会拥有SpringBoot提供的强大功能
 */
@Data//Lombok注解，自动生成get,set方法
@Component//注入到容器中
@ConfigurationProperties(prefix = "tencent.sms") //配置文件里面的前缀目录
public class SmsKey {
        private String regionId;
        private String keyId;
        private String keySecret;
        private String templateCode;
        private String signName;
        private String SmsSdkAppId;
}
```
> 注入容器的时候会出现红色框框，而且在配置文件中自定义的配置没有代码提示，在pom文件中加入下面的代码解决(参照官网)，添加这个配置文件，在打包的时候记得取消打包这个，不然会把一些多余的类也打包进去，占用资源

<br>

![配置文件提示](https://cdn.jsdelivr.net/gh/ShuiLinzi/blog-image@master/后端/配置文件提示.png)
```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-configuration-processor</artifactId>
    <optional>true</optional>
</dependency>
```
@component给一个类注解，@bean给一个方法注解

## 普通注解和基本注解
- @PathVariable 获取路径变量数据
- @RequestParam 获取普通参数数据
- @RequestHeader 获取请求头里面的数据(带key就是指定key的数据，不带就是所有请求头的数据)
- @CookieValue 获取请求的cookie的数据(带key就是指定key的数据，不带就是所有请求所有的cookie数据)
- @RequestBody 获取请求体，将前端传来的json数据封装成所需要的对象，以json格式传输数据(如果是直接传普通的对象则不需要添加注解)
- @RequestAttribute 获取请求域里面的数据

## 自定义WebMvcConfigure的两种实现

1. 在一个配置类中继承WebMvcConfigure的接口，然后在配置类中实现自定义方法
 ```java
   @Configuration
   public class OrderWebConfiguration implements WebMvcConfigurer {
    //添加自己手动写的拦截器
    @Autowired
    LoginUserInterceptor loginUserInterceptor;

    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(loginUserInterceptor).addPathPatterns("/**");
    }
 }
```
  
2. 直接在配置类中放入想要自定义的实现类(@Bean)
```java
@Configuration
public class OrderWebConfiguration  {
    //添加自己手动写的拦截器
    @Autowired
    LoginUserInterceptor loginUserInterceptor;

    @Bean
    public WebMvcConfigurer webMvcConfigurer(){
        return new WebMvcConfigurer() {
            @Override
            public void addInterceptors(InterceptorRegistry registry) {
                registry.addInterceptor(loginUserInterceptor).addPathPatterns("/**");
            }
        };
    }

}

```
  


## 文档
[雷神手敲笔记](https://www.yuque.com/atguigu/springboot)