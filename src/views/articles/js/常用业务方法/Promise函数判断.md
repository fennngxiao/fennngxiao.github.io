# 判断当前函数是否是Promise

简单粗暴的做法是可以检查该对象是否具有 then 方法和 catch 方法，这是 Promise 对象的特征

## 方法一：使用 `instanceof`

最直接的方法是使用 `instanceof` 操作符：

```js
function isPromise(value) {
  return value instanceof Promise
}
```

## 方法二：检查是否有 `then` 方法

可以检查对象是否具有 `then` 方法，这通常也能识别出一个 Promise：

```js
function isPromise(value) {
  return value !== null && typeof value === 'object' && typeof value.then === 'function'
}
```

### 严谨延伸：结合 `then` 和 `catch` 方法

更加严格的判断方式是同时检查 then 和 catch 方法：

```js
function isPromise(value) {
  return (
    value !== null &&
    typeof value === 'object' &&
    typeof value.then === 'function' &&
    typeof value.catch === 'function'
  )
}
```

## 总结

结合以上，我们可以得到一个非常严谨的判断方法

```js
function isPromise(value) {
  return (
    value !== null &&
    typeof value === 'object' &&
    typeof value.then === 'function' &&
    typeof value.catch === 'function' &&
    value instanceof Promise
  )
}
```
