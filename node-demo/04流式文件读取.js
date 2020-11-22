/**
 * 1、同步文件读取
 * 2、异步文件读取
 * 3、简单文件读取 fs.readFile(path[, options], callback)/fs.readFileSync(path[, options])
 * 4、流式文件读取：使用大文件，分多次读取文件。
 */

 // 简单文件读取
 let fs = require('fs');
 fs.readFile('text.tex', (err, data) => {
     if(err) throw err;
     console.log('读取到的文件 ==', data.toString()); // 返回buffer：<Buffer e7 ae 80 e5 8d 95 e6 96 87 e4 bb b6 e5 86 99 e5 85 a5>
     fs.writeFile('text2.tex', data, (err) => {
        if(err) throw err;
         console.log("文件写入成功")
     })
 })

 // 流式文件读取：
 const rs = fs.createReadStream("fighting.png");
 const ws = fs.createWriteStream("fighting1.png");
 const ws1 = fs.createWriteStream("fighting2.png");

 // 方法①
 rs.on('open', () => {
     console.log('可读流打开')
 })
 rs.on('close', () => {
     console.log('可读流关闭');
    //  监听到可读流关闭，可写流end
     ws.end();
 })
 ws.on('open', () => {
     console.log('可读流打开')
 })
 ws.on('close', () => {
     console.log('可读流关闭');
     ws.end()
 })
 rs.on('data', (data) => {
     console.log('监听可读流数据 ==', data.length) // 每次读取65536
     // 将fighting文件读取后再写入fighting2，读完了之后可写流关闭。end/close区别，哪边水管的问题~~
     ws.write(data);
 })

 // 可读流可写流 还要监听过去繁琐，pipe()方法拯救你们！！！
 // 方法 ②
 rs.pipe(ws1)