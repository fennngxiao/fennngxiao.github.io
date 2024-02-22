# 关于 a标签属性target="\_blank"时，ESlint检测报错问题相关

当直接写一个a标签并添加target="\_blank"属性时，ESlint检测会报错，如图所示：
![Alt text](./imgs/html/a标签target=_blank的报错.png){{{width="auto" height="100"}}}

这里指出在较旧的浏览器当中会存在安全风险，需加上**rel="noreferrer"**

当使用**target="\_blank"**打开一个新的标签页时，新页面的window对象上有一个属性“opener”,它指向的是前一个页面的window对象，此时，新打开的页面就可以控制前一个页面。甚至可以通过**window.opener.location.replace**使前一个页面跳转至其他的页面。

为了避免上述安全漏洞的发生，我们就需要在a标签上添加**rel="noopener noreferrer"**属性，此时新开启的标签页当中的windwo.opener就置为**null**了。
