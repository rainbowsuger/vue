/**
 * 同步、异步、简单写入因为是一次性写入所以都不适合大文件写入，性能比较差，容易导致文件溢出。
 * 可写流，可以持续写入。
 */

 let fs = require('fs');
 // 流式文件写入，创建可读/可写流
 // fs.createWriteStream(path[, options])
 let ws = fs.createWriteStream('text1.tex')
 // 目前可读/可写流一直打开，可以通过流的open/close事件来监听流的打开和关闭，提高性能问题。

 ws.once('open', () => {
     console.log("ws可写流打开~~~");
 })
 ws.once('close', () => {
     console.log("ws可写流关闭~~~");
 })
ws.write("通过可写流写入文件内容1");
ws.write("通过可写流写入文件内容2");
ws.write("通过可写流写入文件内容3");

// close拔了水池注入头水管,可能没写完。错误❎
ws.close();
// close拔了水池输出头水管，正确✅
ws.end();