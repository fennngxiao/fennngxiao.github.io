# JavaScript中支持6种属性描述符:

## configurable:

设为 true 时，该属性的描述符才能够被改变，同时该属性也能从对应的对象上被删除。

## enumerable:

enumerable控制对象属性是否可枚举
在JavaScript中，对象的属性有可枚举和不可枚举之分，它是由对象属性描述符enumerable决定的，当设置为true的时候该属性才会出现在对象的枚举属性中。如果该属性是可枚举性的那么这个属性就能被for…in查找遍历到

## value:

该属性对应的值。可以是任何有效的 JavaScript 值（数值，对象，函数等），默认值undefined。

## writable:

设置为true的时候，value才能被赋值运算符（=）改变。

## get:

属性的 getter 函数。当访问该属性时，才会调用此函数，执行时不传入任何参数，但是会传入 this 对象。该函数的返回值会被用作属性的值。默认值undefined。

## set:

属性的 setter 函数。当属性值被修改时，会调用此函数。该方法接受一个参数（也就是被赋予的新值），会传入赋值时的 this 对象。默认值undefined。

# 枚举属性相关方法

## Object.defineProperty(obj, prop, descriptor)

通过Object.defineProperty()定义的属性，enumerable，configurable，writable这几个值默认为false

```javascript
Object.defineProperty({}, 'key', {
  enumerable: false,
  configurable: false,
  writable: false,
  value: 'static'
})
```

直接为对象动态添加属性，enumerable，configurable，writable这几个值默认为true
（当属性值为true时 enumerable/可枚举，configurable/描述符控制，属性可被删除，writable/value可被赋值改变）

```javascript
const obj = {}
obj.name = 'Sean'
```

## Object.getOwnPropertyNames()

获取对象自身所有的属性键名（自有属性），包括可枚举和不可枚举的属性，但不包括使用 symbol 值作为名称的属性。

## Object.keys()

获取对象自身的可枚举属性键名，返回键名数组。

## Object.prototype.propertyIsEnumerable()

判断对象实例obj自身的属性是否为可枚举, 属性名，可以是字符串或 Symbol。

## for...in

遍历对象自身的和原型链上的可枚举的属性。可配合Object.hasOwn / Object.prototype.hasOwnProperty() 只获取自身可枚举属性

## Object.hasOwn

旨在取代 Object.prototype.hasOwnProperty()
Object.hasOwn(target, "prop");

## Object.values()

获取对象自身的可枚举属性的值，返回值数组。

## Object.entries()

获取对象自身的可枚举属性的键值对，每个键值对以数组的形式存储，返回键值对数组集。
for of 遍历对象

```javascript
for (const [key, value] of Object.entries(object1)) {
console.log(${key}: ${value});
}
// "a: somestring"
// "b: 42"
```

以上几个方法除了for...in外其他的方法都无法遍历到原型链的属性。

## Reflect.ownKeys()

获取对象自身所有的属性键名，包括Symbol类型属性

## Object.getOwnPropertySymbols()

获取对象自身Symbol类型属性，Symbol 作为属性名，遍历对象的时候，该属性不会出现在for...in、for...of循环中，也不会被Object.keys()、Object.getOwnPropertyNames()、JSON.stringify()返回。
