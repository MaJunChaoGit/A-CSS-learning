# CSS盒子模型理解

## 1.块元素与行内元素

|      | 块元素                                      | 行内元素                                     |
| ---- | ---------------------------------------- | ---------------------------------------- |
| 位置   | 会另起一行                                    | 和其他元素在同一行                                |
| 盒子属性 | 可以设置width、height、margin、padding、border属性 | width、height为内容的宽高.可以设置margin-left和margin-right属性,无法设置margin-top和margin-bottom属性 |

## 2.非替换元素

如果元素的内容包含在文档中,则称之为非替换元素.如p元素的内容都在该元素本身,那么它就是非替换元素.

## 3.替换元素

作为其他内容占位符的一个元素称为替换元素,根据标签和属性的值来显示内容的元素.如果img元素,input元素

## 4.水平格式化

marigin-left,margin-right,width可以设置为auto.下面分情况讨论:

* 三个值都设置固定值,并且总和不等于父元素的宽度0

  >在FF中margin-right为开发者设定的值
  >
  >在Chrome中,margin-right被强制为auto


* 一个元素设置成auto

  > 当三个元素中的一个设置成auto,那么auto的计算结果为父元素宽度减去所有margin,padding,boder的宽度


* margin-left和margin-right都设置成auto

  > 那么他们会设置成相同的值,元素将居中

* 某个外边距和width设置成auto

  >如果设置某个外边距和width为auto,则设置auto的外边距会等于0
  >
  >width会自动填充父元素

* 全部设置成auto

  > 那么外边距会为0,width会自动填充父元素

* 负外边距

  > 如果设置外边距为负数,width设置为auto的话,width将超过父元素

## 5.垂直格式化

marigin-top,margin-bottom,height可以设置为auto.下面分情况讨论:

* 一个正常流中的元素margin-top和margin-bottom设置成auto后,会被设置成0,即不能将元素垂直居中


* 如果正常流元素的height设置为auto,则其高度将会被其内容填充

* 垂直外边距合并

  >当两个垂直外边距相遇时,那么它们将形成一个外边距.合并后的外边距等于其中外边距较大者

## 6.行内元素的盒模型

* 对于非替换元素,比如a,span等

  > 可以设置margin-left和margin-right属性,无法设置marigin-top和margin-bottom
  >
  > 行内元素border和padding可以设置,但是border-top和padding-top到页面顶部后就不在增加

* 对于替换元素,比如input,img等

  > marigin,padding,border都有效果