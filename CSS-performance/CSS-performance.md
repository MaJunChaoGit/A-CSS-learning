http://benfrain.com/css-performance-revisited-selectors-bloat-expensive-styles/

什么是高效的CSS?不同的选择器对性能的影响如何?是花括号里的属性重要还是选择器重要?.

然而我们在优化网站的性能时,CSS的优化往往是最后的.有更多的优化方案可以带来比CSS优化更显著更快速的收益.然而,我们将其结合起来后,会有一些更大的收获,用户将永远收益.

每当与同行去讨论CSS的速度,往往大家会引用Steve Souders的属性选择器慢或者是伪类选择器慢的结论

然后随着现代浏览器的发展,我觉得验证诸如“属性选择器慢”或“伪选择器慢”之类的反而变得没有太大的意义,

把性能的提升放在括号内而不是括号外才是我们应该关心的事情

但是除了引用Nicole Sullivand的文章来支持我的假设,选择器不同并不重要，我从来没有真正测试过这个理论;我的天赋不足和缺乏完美的分析头脑使我无法尝试,下面让我们来进行一些简单的尝试

```javascript
<script type="text/javascript">
    ;(function TimeThisMother() {
        window.onload = function(){
            setTimeout(function(){
            var t = performance.timing;
                alert("Speed of selection is: " + (t.loadEventEnd - t.responseEnd) + " milliseconds");
            }, 0);
        };
    })();
</script>
//了解(t.loadEventEnd - t.responseEnd)
```

并且，我设置了一个非常简单的测试。20个不同的选择器，都有一个相同的、巨大的DOM，由1000个相同的标记组成

```html
<div class="tagDiv wrap1">
  <div class="tagDiv layer1" data-div="layer1">
    <div class="tagDiv layer2">
      <ul class="tagUl">
        <li class="tagLi"><b class="tagB"><a href="/" class="tagA link" data-select="link">Select</a></b></li>
      </ul>
    </div>
  </div>
</div>
```

测试的方式就是通过不同规则的选择器来让最内部的a标签的字体变为红色,每次测试的结果为每个浏览器的5次平均值.在测试中,我实际是运行了十次,而因为前五次的结果往往是有异常的,所以我们只取后5次的结果.

这里需要注意的是,我们关注点是不同选择器在同一浏览器上的表现,而不是浏览器之间相互的PK.所以在关注下面表格时,从上往下一列一列的看才是合适的.

下面就是测试的结果:

| 序号   | CSS测试用例                                  | IE11  | Google Chrome 65 | Mozilla Firefox 55 |
| ---- | ---------------------------------------- | ----- | ---------------- | ------------------ |
| 1    | [data-select]                            | 69    | 73.2             | 121.4              |
| 2    | a[data-select]                           | 87.8  | 59.8             | 116.4              |
| 3    | [data-select="link"]                     | 98.4  | 56.6             | 108                |
| 4    | a[data-select="link"]                    | 95.5  | 55               | 104.4              |
| 5    | div[data-div="layer1"] a[data-select="link"] | 82.6  | 56.6             | 104                |
| 6    | a:after                                  | 105   | 68.2             | 121                |
| 7    | .tagA.link                               | 79.2  | 59               | 108                |
| 8    | .tagUl .link                             | 95.2  | 55.4             | 109.8              |
| 9    | .tagB > .tagA                            | 82.4  | 54.2             | 107.8              |
| 10   | [class^="wrap"]                          | 85.2  | 57.6             | 119.2              |
| 11   | div:nth-of-type(1) a                     | 79    | 54               | 104.4              |
| 12   | div:nth-of-type(1) div:nth-of-type(1) a  | 93.8  | 54               | 96.6               |
| 13   | div.wrapper > div.tagDiv > div.tagDiv.layer1  > div.tagDiv.layer2 > ul.tagUl > li.tagLi > b.tagB > a.tagA.link | 94.2  | 52.8             | 101.4              |
| 14   | .tagLi .tagB a.tagA.link                 | 80.6  | 57               | 103.4              |
| 15   | *                                        | 78.6  | 53.6             | 98.3               |
| 16   | a                                        | 96.6  | 55.2             | 103.8              |
| 17   | div a                                    | 95.8  | 59.6             | 122.8              |
| 18   | div ul a                                 | 82    | 60.8             | 120.8              |
| 19   | div ul a:after                           | 102.8 | 69.6             | 130.2              |
| 20   | .link                                    | 79.6  | 57               | 119                |
|      | 最大的差异                                    | 36    | 20.4             | 34                 |
|      | 最慢的选择器序号                                 | 19    | 1                | 19                 |

然后经过我多次的测试,尽管差异值彼此差不多,但是还是无法从每次得到的结果中推断出哪个选择器最慢.

不过我们可以确定的是,使用类选择器,不仅在和其他选择器拥有一样的