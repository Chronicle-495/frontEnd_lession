// �Զ��幹�캯��
// ���շ�����
// function Teacher(name, sex, weight, course) {   // ̫��, ������
// �Ժ�Ҫ��ôд
function Teacher(opt) {
    this.name = opt.name || "����";
    this.sex = opt.sex || "��";
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