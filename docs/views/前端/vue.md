---
title: vue学习笔记
date: 2022-03-30
---
## vue核心
### 事件处理
事件的基本使用：
1.使用v-on:xxx或@xxx绑定事件，其中xxx是事件名
2.事件的回调需要配置在methods对象中，最终会在vm上
3.methods中配置的函数，不要用箭头函数！否则this就不是vm了
4.methods中配置的函数，都是被Vue所管理的函数，this的指向是vm或组件实例对象
5.@click="demo"和@click="demo($event)"效果一致，但后者可以传参

vue中常用的按键别名:
    回车 => enter
    删除 => delete
    退出 => esc
    空格 => space
    换行 => tab (特殊，搭配keydown使用)
    上下左右 => up down left right

Vue监视数据的原理：
1.vue会监视data中所有层次的数据。
2.如何监测对象中的数据？
通过setter实现监视，且要在new Vue时就传入要监测的数据。
(1).对象中后追加的属性，Vue默认不做响应式处理
(2).如需给后添加的属性做响应式，请使用如下API:
        Vue.set(target,propertyName/index,value)或
        vm.$set(target,propertyName/index,value)
3.如何监测数组中的数据？
        通过包裹数组更新元素的方法实现，本质就是做了两件事：
        (1),调用原生对应的方法对数组进行更新。
        (2),重新解析模板，进而更新页面。
4.在Vue修改数组中的某个元素一定要用如下方法：
- 1.使用这些API:push()、pop()、shift()、unshift()、splice()、sort()、reverse()
- 2.Vue.set（）vm.$set（）
特别注意：Vue.set（）和vm.$set（）不能给vm或vm的根数据对象添加属性！！



收集表单数据：
若：<input type="text"/>,则v-model收集的是value值，用户输入的就是value值。
若：<input type="radio"/>则v-model收集的是value值，且要给标签配置value值。
若：<input type="checkbox"/>
1.没有配置input的value属性，那么收集的就是checked(勾选or未勾选，是布尔值)
2.配置input的value,属性：
        (1)v-model的初始值是非数组，那么收集的就是checked(勾选or未勾选，是布尔值)
        (2)v-model的初始值是数组，那么收集的的就是value组成的数组
备注：v-model的三个修饰符：
        1azy:失去焦点再收集数据
        number:输入字符串转为有效的数字
        trim:输入首尾空格过滤


过滤器：
定义：对要显示的数据进行特定格式化后再显示（适用于一些简单逻辑的处理）。
语法：
1.注册过滤器：Vue.filter(name,callback)或new Vue({filters:{}})
2.使用过滤器：{{xxx | 过滤器名}}或v-bind:属性="xxx|过滤器名"
备注：
1,过滤器也可以接收额外参数、多个过滤器也可以串联
2,并没有改变原本的数据，是产生新的对应的数据


自定义指令总结：
一、定义语法：
(1).局部指令：
```javascript
new Vue({ 			
directives:({指令名：配置对象

})			
new Vue({
directives:(指令名：回调函数)
})
```
(2).全局指令：
Vue.directive(指令名，配置对象)或Vue.directive(指令名，回调函数)
配置对象中常用的3个回调：
        (1) bind:指令与元素成功绑定时调用。
        (2) inserted:指令所在元素被插入页面时调用。
        (3) update:指令所在模板结构被重新解析时调用。
备注：
1.指令定义时不加v-,但使用时要加v-:
2.指令名如果是多个单词，要使用kebab-case命名方式，不要用camelCase命名。

生命周期：
1.又名：生命周期回调函数、生命周期函数、生命周期钩子。
2.是什么：Vue在关键时刻帮我们调用的一些特殊名称的函数。
3.生命周期函数的名字不可更改，但函数的具体内容是程序员根据需求编写的。
4.生命周期函数中的this指向是vm或组件实例对象

常用的生命周期钩子：
1. mounted:发送ajax请求、启动定时器、绑定自定义事件、订阅消息等【初始化操作】。
2. beforeDestroy:清除定时器、解绑自定义事件、取消订阅消息等【收尾工作】。

关于销毁Vue实例
1. 销毁后借助Vue开发者工具看不到任何信息。
2. 销毁后自定义事件会失效，但原生dom事件依然有刻。
3. 一般不会再beforeDestroy操作数据，因为即便操作数据，也不会再触发更新流程了。

## Vue组件化编程
### 基本使用
Vue中使用组件的三大步骤：
一，定义组件（创建组件）
二、注册组件
三、使用组件（写组件标签）
如何定义一个组件？
使用Vue.extend(options)创建，其中options和new Vue(options)时传入的那个options几乎一样，但也有点区别：
区别如下：
1.el不要写，为什么？
因为：最终所有的组件都要经过一个vm的管理，由vm中的el决定服务哪个容器。
2.data必须写成函数，为什么？
避免组件被复用时，数据存在引用关系。备注：使用template可以配置组件结构。
二、
如何注册组件？
1.局部注册：靠new Vue的时候传入components选项
2.全局注册：靠Vue.component('组件名'，组件)
三、编写组件标签：
<school></school>

几个注意点：
1.关于组件名：
一个单词组成：
    第一种写法（首字母小写）：school
    第二种写法（首字母大写）：School
多个单词组成：
第一种写法(kebab-case命名)：my-school
第二种写法(CamelCase命名)：MySchool(需要Vue脚手架支持)
备注：
(1).组件名尽可能回避HTML中己有的元素名称，例如：h2、H2都不行。
(2).可以使用name配置项指定组件在开发者工具中呈现的名字。
2.关于组件标签：
第一种写法：
<school></school>
第二种写法：
<school/>
备注：不用使用脚手架时，<schoo1/>会导致后续组件不能渲染。
3.一个简写方式：
const school=Vue.extend(options)可简写为：const school=options

关于VueComponent:
I.school组件本质是一个名为VueComponent的构造函数，且不是程序员定义的，是Vue.extend生成的。
2.我们只需要写<school/>或<school></school>,Vue解析时会帮我们创建school组件的实例对象，
即Vue帮我们执行：new VueComponent(options)。
3.特别注意：每次调用Vue.extend,返回的都是一个全新的VueComponent!!!!
4.关于this指向：
(1).组件配置中：
data函数、methods中的函数、watch中的函数、computed中的函数它们的this均是【VueComponent实例对象】。
(2).new Vue(options)配置中：
data函数、methods中的函数、watch中的函数、computed中的函数它们的this均是【Vue实例对象】。
5.VueComponent的实例对象，以后简称vc(也可称之为：组件实例对象)。
Vue的实例对象，以后简称vm。