import App from './components/1.App.vue'

const {createApp} = Vue;

/**
 * Vue的核心（系统）：模板语法 -> 核心库 -> 编译模板 -> 渲染DOM
 *
 * 组件逻辑的本质就是一个对象，里面有很多特定的属性
 * Vue将数据与DOM进行关联，并建立响应式关联
 * 数据改变，视图更新
 *
 * Vue
 *
 * 数据 -> ViewModel 核心库 -> 视图
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
