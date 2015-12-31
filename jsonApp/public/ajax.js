Vue.component('tasks', {
    template: '#tasks-template',
    data: function () {
        return {
            list: []
        };
    },
    created: function(){
        if(window.location.href == 'http://localhost:63342/vue2/jsonApp/public/index.php') {
            $my_api_url = 'http://jsonapp.localhost/pretend-api';
        } else {
            $my_api_url = 'http://jsonapp.grat.xyz/pretend-api';
        }
        $.getJSON($my_api_url, function(tasks){
            this.list = tasks;
        }.bind(this));
    }
});

new Vue({
    el: 'body'
});
