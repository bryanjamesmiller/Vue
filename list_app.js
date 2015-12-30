/**
 * Created by B on 12/29/2015.
 */

Vue.component('my-task-component',
    {
        template: '#tasks-template',
        props:['list'],
        computed:{
            remaining: function(){
                var vm = this;
                return tasksLeft = this.list.filter(function(task){
                    // The filter will return the items from the list array
                    // that return true, which is determined below.
                    return ! vm.inProgress(task);
                }).length;
            }
        },
        methods:{
            isCompleted: function(task){
                return task.completed;
            },
            inProgress: function(task){
                return ! task.completed;
            },
            deleteTask: function(task){
                this.list.$remove(task);
            },
            clearCompleted: function(){
                this.list = this.list.filter(this.inProgress);
            }
        }
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