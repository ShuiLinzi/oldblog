---
title: vue学习笔记
date: 2022-03-30
---

## 事件处理
事件的基本使用：
1.使用v-on:xxx或@xxx绑定事件，其中xxx是事件名
2.事件的回调需要配置在methods对象中，最终会在vm上
3.methods中配置的函数，不要用箭头函数！否则this就不是vm了
4.methods中配置的函数，都是被Vue所管理的函数，this的指向是vm或组件实例对象
5.@click=-"demo"和@click="demo($event)"效果一致，但后者可以传参

vue中常用的按键别名:
    回车 => enter
    删除 => delete
    退出 => esc
    空格 => space
    换行 => tab (特殊，搭配keydown使用)
    上下左右 => up down left right

    