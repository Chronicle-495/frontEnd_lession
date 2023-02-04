// =========================================================
// 1. let关键字
// let声明的变量只在let命令所在的代码块内有效, 不可重复声明
// 不会污染全局变量, let声明过, var也不能声明相同的了
// 2. let不会提升, 会形成暂时性死区, 只要块级作用域内存在let命令,
// 3.

// function test(a) {
//     let a = 10;
//     console.log(a);
// }
// test(a);    // 报错

// // 报错
// function test(x = y, y = 2) {
//     console.log(x, y);
// }
// test();

// // 正确
// function test(x = 2, y = x) {
//     console.log(x, y);
// }
// test();

// // typeof不再是一个百分百安全的操作
// console.log(typeof a);
// let a;

// var arr = [];
// for (var i = 0; i < 10; i++) {
//     arr[i] = function () {
//         console.log(i);
//     }
// }
//
// for (var j = 0; j < arr.length; j++) {
//     arr[j]();
// }
// // 这个for里面是j, 则是10个10,
// // 这个for里面是i, 则是0-9, 因为重新覆盖了

// for (let i = 0; i < 10; i++) {
//     var i = 'a';    // 报错
//     console.log(i);
// }

// // 这两个i会区分开, 不会覆盖
// for (var i = 0; i < 10; i++) {
//     let i = 'a';    // 正确
//     console.log(i);
// }

// for (let i = 0; i < 10; i++) {
//     let i = 'a';    // 正确, 此时的两个块级作用域不是一个作用域
//     console.log(i);
// }

// if (i) {
//     let a = 1;
//     {
//         let a = 2;
//         console.log(a);
//     }
// }

// // 这个也没事
// if (1) {
//     let a = 1;
//     (function() {
//         var a = 2;
//     })();
//     console.log(a);
// }

// 不要在块级作用域内声明函数, 用函数声明 var test1 = function...

// 块级作用域是没有返回值的

