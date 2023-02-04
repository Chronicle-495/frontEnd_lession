import App from './components/1.App.vue'

const {createApp} = Vue;

/**
 * Vue�ĺ��ģ�ϵͳ����ģ���﷨ -> ���Ŀ� -> ����ģ�� -> ��ȾDOM
 *
 * ����߼��ı��ʾ���һ�����������кܶ��ض�������
 * Vue��������DOM���й�������������Ӧʽ����
 * ���ݸı䣬��ͼ����
 *
 * Vue
 *
 * ���� -> ViewModel ���Ŀ� -> ��ͼ
 */

const Article = {
    data() {
        return {
            title: 'This is a TITLE',
            author: 'Xiaoye',
            dateTime: '2021-01-01 20:50:08',
            content: 'This is a CONTENT',
            like: 0,
            isLogin: true,
            isFollowed: false,
            myComment: 123123,
            commentList: []
        }
    },
    methods: {
        likeThisArticle() {
            this.like++;
        },
        followAction() {
            this.isFollowed = !this.isFollowed;
        },
        submitComment() {
            if (this.myComment.length > 0) {
                this.commentList.push({
                    id: new Date().getTime(),
                    dateTime: new Date(),
                    content: this.myComment
                });

                console.log(this.commentList);
            }
        }
    }
}

createApp(Article).mount('#app');
