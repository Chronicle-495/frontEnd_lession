// 自定义构造函数
// 大驼峰命名
// function Teacher(name, sex, weight, course) {   // 太长, 传对象
// 以后要这么写
function Teacher(opt) {
    this.name = opt.name || "张三";
    this.sex = opt.sex || "男";
    this.weight = opt.weight || 130;
    this.course = opt.course || null;
    this.smoke = function () {
        this.weight--;
        console.log(this.weight);
    }
    this.eat = function () {
        this.weight++;
        console.log(this.weight);
    }
}