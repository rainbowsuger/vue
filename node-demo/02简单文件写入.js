/**
 * fs.writeFile(file, data[, options], callback)
 * fs.writeFileSync(file, data[, options])
 * 简单写入不需要先打开后写入在回调关闭
 * flag: 
 *  -w写入会完全覆盖原有，没有找到文件自动创建
 *  -r:读取文件，
 *  -r+读写，
 *  -a:追加
 * path: 相对路径、绝对路径
 */

 let fs = require('fs');
 fs.writeFile('text.txt', "简单文件写入", { flag: 'a' }, (err) => {
     if(err) throw err;
     console.log("简单文件写入成功")
 })