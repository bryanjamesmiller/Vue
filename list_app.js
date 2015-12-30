/**
 * Created by B on 12/29/2015.
 */

Vue.component('my-task-component',
    {
        template: '#tasks-template',
        props:['list']
    });

new Vue({
   el: '#list_app',
    data:{
        is_it_done:'cross_off',
        tasks:[
            { 'activity':'Go to the store', 'completed':false},
            { 'activity':'Go to school', 'completed':false},
            { 'activity':'Go to home', 'completed':true}
        ]
    },
    methods:{
        toggle_cross_off_class:function(task){
            task.completed = ! task.completed;
        }
    }
});