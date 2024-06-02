# Web Workers

## 简介

Web Worker是HTML5引入的一种技术，用于在后台线程中运行JavaScript代码，以避免阻塞用户界面的操作。
它可以帮助开发者在不影响主线程（UI线程）响应速度的情况下，执行复杂和耗时的任务，从而提升Web应用的性能和响应速度。

## 关键特性

- 独立线程：Web Worker运行在与主线程分离的独立线程中，不会影响主线程的性能和UI响应。
- DOM访问限制：Web Worker不能直接访问DOM元素，以避免[线程竞争](https://fennngxiao.github.io/#/articles/mdPage/other-线程竞争)问题。
  Worker 线程所在的全局对象，与主线程不一样，无法读取主线程所在网页的 DOM 对象，也无法使用document、window、parent这些对象。但是，Worker 线程可以navigator对象和location对象。
- 消息传递：主线程和Worker线程之间通过消息传递机制进行通信，使用postMessage方法发送消息，onmessage事件接收消息。
- 同源限制：Web Worker受到同源策略的限制，分配给 Worker 线程运行的脚本文件，必须与主线程的脚本文件同源，这样可确保安全性。
- 脚本限制：Worker 线程不能执行alert()方法和confirm()方法，但可以使用 XMLHttpRequest 对象发出 AJAX 请求。
- 文件限制：Worker 线程无法读取本地文件，即不能打开本机的文件系统（file://），它所加载的脚本，必须来自网络。Worker 内部如果要加载其他脚本，可以通过专有方法importScripts方法加载外部脚本文件。

## 使用示例

#### 创建和启动Web Worker

首先，在主线程中创建一个Worker对象，指定要运行的脚本文件：

```js
// 主线程代码
if (window.Worker) {
  const myWorker = new Worker('worker.js')

  myWorker.postMessage('Hello, Worker!') // 向Worker发送消息

  myWorker.onmessage = function (e) {
    console.log('主线程接收到消息: ' + e.data)
  }

  myWorker.onerror = function (e) {
    console.error('Worker出错: ', e)
  }
} else {
  console.log('你的浏览器不支持Web Worker.')
}
```

#### Worker线程脚本

在独立的Worker脚本文件中，处理接收到的消息并返回结果：

```js
// worker.js
onmessage = function (e) {
  console.log('Worker接收到消息: ' + e.data)
  let result = e.data + ' (from Worker)'
  postMessage(result) // 向主线程发送消息
}
```

#### 终止 worker

```js
myWorker.terminate()
```

## 典型应用场景

- 复杂计算：例如大量数据处理、科学计算、图像处理等耗时任务。
- 实时数据处理：如WebSocket数据流、文件读写等需要后台处理的实时任务。
- 动画和游戏：在不影响主线程渲染的情况下，处理复杂的游戏逻辑和物理运算。

## 注意事项

- 同源限制：分配给 Worker 线程运行的脚本文件，必须与主线程的脚本文件同源。
- 线程开销：创建和销毁Worker是有开销的，适合长期任务。
- 通信开销：消息传递涉及序列化和反序列化，频繁通信可能影响性能。
- 浏览器支持：现代浏览器普遍支持Web Worker，但在使用前应检查兼容性。

通过Web Worker，开发者可以在Web应用中实现更高效的并行处理，提升用户体验。
