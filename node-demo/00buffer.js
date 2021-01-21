let str = "hello world 婵婵";
let buf = Buffer.from(str);
console.log("buf = ", buf); // <Buffer 68 65 6c 6c 6f 20 77 6f 72 6c 64>
console.log("buf.length =", buf.length); // 占用内存大小，一个buffer就是一个字节。
console.log("str.length =", str.length); // 长度
let buf2 = Buffer.alloc(10); // 占用10个字节的buffer
buf2[10] = 0xff; // 无用，不会添加在后面
console.log("buf2", buf2)
let buf3 = Buffer.allocUnsafe(10); // 创建一个指定大小的Buffer, 但是可能包含敏感数据。
console.log("buf3 = ", buf3);