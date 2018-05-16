http://benfrain.com/css-performance-revisited-selectors-bloat-expensive-styles/

| CSS测试用例                                  | IE11  | Google Chrome 65 | Mozilla Firefox 55 |
| ---------------------------------------- | :---: | :--------------: | :----------------: |
| [data-select]                            |  151  |       50.4       |       209.5        |
| a[data-select]                           | 152.8 |       51.7       |        198         |
| [data-select="link"]                     | 107.1 |       49.6       |       193.9        |
| a[data-select="link"]                    |  114  |       48.9       |       205.9        |
| div[data-div="layer1"] a[data-select="link"] | 106.4 |       50.7       |       209.2        |
| a:after                                  | 131.9 |       57.5       |       204.7        |
| .tagA.link                               | 103.5 |       47.1       |       195.4        |
| .tagUl .link                             | 108.6 |        50        |       200.3        |
| .tagB > .tagA                            | 121.8 |       48.3       |       204.3        |
| [class^="wrap"]                          | 124.4 |       49.3       |       200.6        |
| div:nth-of-type(1) a                     | 104.3 |       50.4       |       199.9        |
| div:nth-of-type(1) div:nth-of-type(1) a  | 97.7  |       50.1       |       209.2        |
| div.wrapper > div.tagDiv > div.tagDiv.layer1  > div.tagDiv.layer2 > ul.tagUl > li.tagLi > b.tagB > a.tagA.link | 107.4 |       48.6       |       116.4        |
| .tagLi .tagB a.tagA.link                 | 104.4 |        52        |        93.5        |
| *                                        | 106.1 |       49.5       |        98.3        |
| a                                        | 114.7 |       50.3       |       104.7        |
| div a                                    | 103.4 |       50.1       |        99.6        |
| div ul a                                 | 101.4 |       49.8       |       103.8        |
| div ul a:after                           | 106.3 |       60.9       |       106.8        |
| .link                                    | 118.6 |       49.1       |       109.8        |



