# Object.defineProperty 数据劫持方式

语法
Object.defineProperty(obj,prop,descriptor)
参数
obj: 目标对象
prop: 需要定义的属性或方法的名称
descriptor: 目标属性所拥有的特性
可供定义的特性列表
value: 属性的值
writable: 如果为false，属性的值就不能被重写。
get: 一旦目标属性被访问就会调回此方法，并将此方法的运算结果返回用户。
set: 一旦目标属性被赋值，就会调回此方法。
configurable: 如果为false，则任何尝试删除目标属性或修改属性性以下特性（writable, configurable, enumerable）的行为将被无效化。
enumerable: 是否能在for...in循环中遍历出来或在Object.keys中列举出来。

```javascript
Object.defineProperty(data, key, {
  enumerable: true, // 是否能在for...in循环中遍历出来或在Object.keys中列举出来。
  configurable: true, // false，不可修改、删除目标属性或修改属性性以下特性
  get: function () {
    console.log('get')
  },
  set: function () {
    console.log('监听到数据发生了变化')
  }
})
```
