Vue.component('tasks', {
   template:'#tasks-template',
    props:['list'],

    ready(){
        this.list = JSON.parse(this.list);
    }
});

new Vue({
    el: 'body'
});
