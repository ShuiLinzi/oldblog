---
title: Java核心技术卷知识
tags:
- 随笔
---
## 面向对象程序设计
1.创建一个数字数组时，所有元素都初始化为0。boolean数组的元素会初始化为false。对象数组的元素则初始化为一个特殊值null，表示这些元素(还)未存放任何元素。

2.增强for循环 for(variavle : collection),其中collection这一集合表达式必须是一个数组或者是一个实现了Iterable接口的类对象

3.Math.random方法返回一个0到1之间(包含0、不包含1)的随机浮点数。用n乘以这个浮点数，就可以得到从0到n-1之间的一个随机数。

4.注意不要编写返回可变对象引用的访问器方法。比如下面的Employee类就违反了这个设计原则，因为其中的getHireDay方法返回了一个Date类对象:

```java
    class Employee{
        private Date hireDay;
        ···
        public Date getHireDay(){
            return hireDay;
        }
    }
```
    LocalDate类没有更改器方法，与之不同，Date类有一个更改器方法setTime。
    Date对象是可变的，这一点就破坏了封装性！请看下面这段代码：
```java
    Employee harry = ...;
    Date d = harry.getHireDay();
    double tenYearsInMilliSeconds = 10*365.25*24*60*60*1000;
    d.setTime(d.getTime()-(long) tenYearsIMilliSeconds);
```
    出错的原因很微妙。d和harry.hireDay 引用同一个对象。对d调用更改器方法就可以自动地改变这个Employee对象的私有状态！

    如果需要返回一个可变对象的引用，首先应该对它进行克隆(clone)。对象克隆是指放在另一个新位置上的对象副本。
### 5.final实例字段
可以将实例字段定义为final。这样的字段必须在构造对象时初始化。也就是说，必须确保在每一个构造器执行之后，这个字段的值已经设置，并且以后不能再修改这个字段。例
如，可以将 Employee类中的name字段声明为 final,因为在对象构造之后，这个值不会再改变，即没有setname方法。

final修饰符对于类型为基本类型或者不可变类的字段尤其有用。（如果类中的所有方法都不会改变其对象，这样的类就是不可变的类。例如， String类就是不可变的。）
### 静态字段和静态方法
#### 静态字段

    如果将一个字段定义为static，每个类只有一个这样的字段。而对于非静态的实例字段，每个对象都有自己的一个副本。例如，假设需要给每一个员工赋予唯一的标识码。这里给Employee类添加一个实例字段id和一个静态字段nextId:

```java
    class Employee{
        private static int nextId = 1;
        private int id;
    }
```
现在，每一个 Employee 对象都有一个自己的id字段，但这个类的所有实例将共享一个nextId字段。换句话说，如果有1000个Employee类对象，则有1000个实例字段id，分别对应每一个对象。但是，只有一个静态字段nextId。即使没有Employee对象，静态字段nextId也存在。**它属于类，而不属于任何单个的对象**。
> 在一些面向对象程序设计语言中，静态字段被称为类字段。术语“静态”只是沿用了C++的叫法，并无实际意义。

一句话讲就是静态方法是类的方法，静态字段是类的字段，可以直接通过类.方法进行调用，比如Math.sort();
#### 静态常量
静态变量使用的比较少，但静态常量却很常用。比如，在Math类中定义一个静态常量:
```java
public class Math{
    public static final double PI = 3.1415923;
}
```
在程序中，可以用Math.PI来访问这个常量。

如果省略关键字static，PI就变成了Math类的一个实例字段。也就是说，需要通过Math类的一个对象类访问PI，并且每一个Math对象都有它自己的一个PI副本。

由于每个类对象都可以修改公共字段，所以，最后不要有公共字段。然而，公共常量(即final字段)却没问题，因为final不需要在进行修改。

>如果查看 System类，就会发现有一个 setout方法可以将 System,t设置为不同的
流。你可能会感到奇怪，为什么这个方法可以修改 final变量的值。原因在于， setout
方法是一个原生方法，而不是在Java语言中实现的。原生方法可以绕过Java语言的
访问控制机制。这是一种特殊的解决方法，你自己编写程序时不要模仿这种做法。