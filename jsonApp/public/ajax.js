Vue.component('tasks', {
    template: '#tasks-template',
    data: function () {
        return {
            list: []
        };
    },
    created: function(){
        $.getJSON('http://jsonapp.localhost/pretend-api', function(tasks){
            this.list = tasks;
        }.bind(this));
    }
});

new Vue({
    el: 'body'
});
