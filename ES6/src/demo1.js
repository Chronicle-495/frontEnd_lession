// =========================================================
// 1. let�ؼ���
// let�����ı���ֻ��let�������ڵĴ��������Ч, �����ظ�����
// ������Ⱦȫ�ֱ���, let������, varҲ����������ͬ����
// 2. let��������, ���γ���ʱ������, ֻҪ�鼶�������ڴ���let����,
// 3.

// function test(a) {
//     let a = 10;
//     console.log(a);
// }
// test(a);    // ����

// // ����
// function test(x = y, y = 2) {
//     console.log(x, y);
// }
// test();

// // ��ȷ
// function test(x = 2, y = x) {
//     console.log(x, y);
// }
// test();

// // typeof������һ���ٷְٰ�ȫ�Ĳ���
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
// // ���for������j, ����10��10,
// // ���for������i, ����0-9, ��Ϊ���¸�����

// for (let i = 0; i < 10; i++) {
//     var i = 'a';    // ����
//     console.log(i);
// }

// // ������i�����ֿ�, ���Ḳ��
// for (var i = 0; i < 10; i++) {
//     let i = 'a';    // ��ȷ
//     console.log(i);
// }

// for (let i = 0; i < 10; i++) {
//     let i = 'a';    // ��ȷ, ��ʱ�������鼶��������һ��������
//     console.log(i);
// }

// if (i) {
//     let a = 1;
//     {
//         let a = 2;
//         console.log(a);
//     }
// }

// // ���Ҳû��
// if (1) {
//     let a = 1;
//     (function() {
//         var a = 2;
//     })();
//     console.log(a);
// }

// ��Ҫ�ڿ鼶����������������, �ú������� var test1 = function...

// �鼶��������û�з���ֵ��

