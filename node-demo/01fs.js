const fs = require('fs');
// 同步读取文件：fs.openSync(path[, flags, mode]) // flags:只读’r‘,可写'w'

let fd = fs.openSync('text.txt', 'w');
console.log(fd); // 返回一个随机数值，代表文件被打开
// 同步写入文件，fs.writeSync(fd, buffer[, offset[, length[, position]]])
fs.writeSync(fd, '今天天气不错~~~', 20);
// 同步关闭文件
fs.closeSync(fd);

// 异步：params: err:错误对象，没有错误是null，fd返回的文件；
fs.open("text.txt", 'w', (err, fd) => {
    if(err) throw err;
    fs.write(fd, '今天是2020年11月22日，在等裤裤回家~', (err) => {
        if(err) throw err;
        console.log('写入成功');
        fs.close(fd, (err) => {
            if(err) throw err;
            console.log("文件关闭成功") 
        });
    })
})
