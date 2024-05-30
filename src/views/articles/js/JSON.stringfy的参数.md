# JSON.stringify 和它的三个参数

## replacer: array | function

- 当第二个参数为Array时，包含在这个数组中的属性名才会被序列化到最终的 JSON 字符串中
- 当第二个参数为函数时，被序列化的值的每个属性都会经过该函数的转换和处理
  若该函数返回值是undefined，那么对应的属性不会被序列化，如果返回其他的值，那么用返回的值替代原来的值进行序列化

```javascript
 function(key, value) { return newValue }
```

## space: number

- stringify可以通过第三个参数来控制序列化的内容的空格缩进 例如2/4（2个空格或者4个空格）

## 注意点：

### JSON.stringify 无法转化的值

#### 1、被转换值中有 NaN 和 Infinity时 会被转化为null

```javascript
let myObj = {
  name: 'xxx',
  age: Infinity,
  money: NaN
}
console.log(JSON.stringify(myObj))
// {"name":"xxx","age":null,"money":null}
JSON.stringify([NaN, Infinity])
// [null,null]
```

#### 2、被转换值中有 undefined、任意的函数以及 symbol 值

- 数组,undefined、任意的函数以及symbol值在序列化的过程中会被转换成 null

```javascript
JSON.stringify([undefined, function () { }, Symbol("")]);
// '[null,null,null]'
- 非数组,undefined、任意的函数以及symbol值在序列化的过程中会被忽略
JSON.stringify({ x: undefined, y: function () { }, z: Symbol("") });
// '{}'
```

#### 3、循环引用 会报错

#### 4、含有不可枚举的属性值时

```javascript
let personObj = Object.create(null, {
  name: { value: 'FennngXiao', enumerable: false },
  year: { value: '2021', enumerable: true }
})
console.log(JSON.stringify(personObj)) // {"year":"2021"}
```
