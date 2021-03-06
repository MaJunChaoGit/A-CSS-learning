# CSS基础查漏补缺

**1.当值为百分比的时候,即使当时的值为0时也需要写百分比符号,除此情况外可以直接写0** 

```CSS
p { color: rgb(100%,0%,0%)}
```



**2.若值为若干单词的话,则要给值加引号**

```CSS
p {font-family: "sans serif"}
```



**3.[class*="test"]与[class~="test"]的区别在于 * 是查询所有包含该字符串的属性值,而 ~ 是查询一整个单词**

**4.background-color**

```css
background-color: rgba(255,255,255,0); //错误
background-color: transparent; //正确
```

**5.background-attachment**

可以为背景图像设置滚动时是否随动或者固定

```CSS

background-attachment: scroll	默认值。背景图像会随着页面其余部分的滚动而移动。
background-attachment: fixed	当页面的其余部分滚动时，背景图像不会移动。
background-attachment: inherit	规定应该从父元素继承 属性的设置。
```

**6.text-indent**

1.可以为所有块级元素应用 text-indent，但无法将该属性应用于行内元素，图像之类的替换元素上也无法应用 text-indent 属性。不过，如果一个块级元素（比如段落）的首行中有一个图像，它会随该行的其余文本移动.

2.具有继承的特性

```CSS
div#outer {width: 500px;}
div#inner {text-indent: 10%;}
p {width: 200px;}

<div id="outer">
<div id="inner">some text. some text. some text.
<p>this is a paragragh.</p>
</div>
</div>
```

3.可以设置为负值。利用这种技术，可以实现很多有趣的效果，比如“悬挂缩进”，不过在为 text-indent 设置负值时要当心，如果对一个段落设置了负值，那么首行的某些文本可能会超出浏览器窗口的左边界。为了避免出现这种显示问题，建议针对负缩进再设置一个外边距或一些内边距.

```CSS
p {text-indent: -5em; padding-left: 5em;}
```



**7.text-align**

1.如果 direction 属性是 ltr，则默认值是 left；如果 direction 是 rtl，则为 right。

2.`justify没有弄太明白`

10.word-spacing修改单词间隔,letter-spacing修改字母间隔

**8.text-transform**

```
text-transform: uppercase
text-transform: lowercase
text-transform: capitalize
text-transform: none
```

**9.white-space**

| 值        | 空白符  | 换行符  | 自动换行 |
| -------- | ---- | ---- | ---- |
| pre-line | 合并   | 保留   | 允许   |
| normal   | 合并   | 忽略   | 允许   |
| nowrap   | 合并   | 忽略   | 不允许  |
| pre      | 保留   | 保留   | 不允许  |
| pre-wrap | 保留   | 保留   | 允许   |

**10.font-variant**

font-variant可以设定小型大写字母

```CSS
p {font-variant:small-caps;}
```

**11.list-style**

依次分别为设置列表项的样式，位置，图片路径

```CSS
list-style: square inside url('/i/eg_arrow.gif')border-collapse**
```

**12.border-collapse**

可以将表格边框折叠成单一边框

```CSS
 border-collapse:collapse;
```

**13. caption-side**

可以设置表格标题的位置

```CSS
 caption-side:bottom;
```

**14. table-layout**

| 值         | 描述              |
| --------- | --------------- |
| automatic | 默认。列宽度由单元格内容设定。 |
| fixed     | 列宽由表格宽度和列宽度设定。  |

**15.margin**

外边距合并指的是，当两个垂直外边距相遇时，它们将形成一个外边距。合并的外边距的高度等于两个发生合并的外边距的高度中的较大者。

`只有普通文档流中块框的垂直外边距才会发生外边距合并。行内框、浮动框或绝对定位之间的外边距不会合并。`

**16.单位**

* 尺寸

| 单位   | 描述                                       |
| ---- | ---------------------------------------- |
| %    | 百分比                                      |
| in   | 英寸                                       |
| cm   | 厘米                                       |
| mm   | 毫米                                       |
| em   | 1em 等于当前的字体尺寸。2em 等于当前字体尺寸的两倍。例如，如果某元素以 12pt 显示，那么 2em 是24pt。在 CSS 中，em 是非常有用的单位，因为它可以自动适应用户所使用的字体。 |
| ex   | 一个 ex 是一个字体的 x-height。 (x-height 通常是字体尺寸的一半。) |
| pt   | 磅 (1 pt 等于 1/72 英寸)                      |
| pc   | 12 点活字 (1 pc 等于 12 点)                    |
| px   | 像素 (计算机屏幕上的一个点)                          |



* 颜色

| 单位              | 描述                            |
| --------------- | ----------------------------- |
| (颜色名)           | 颜色名称 (比如 red)                 |
| rgb(x,x,x)      | RGB 值 (比如 rgb(255,0,0))       |
| rgb(x%, x%, x%) | RGB 百分比值 (比如 rgb(100%,0%,0%)) |
| #rrggbb         | 十六进制数 (比如 #ff0000)            |

**17.值的间写方式**

| 写法                | 说明                        |
| ------------------- | --------------------------- |
| 20px                | 上右下左都是20px            |
| 20px 40px           | 上下20px,左右40px           |
| 20px 40px 60px      | 上20px,左右40px,下60px      |
| 20px 40px 60px 80px | 上20px,右40px,下60px,左80px |

