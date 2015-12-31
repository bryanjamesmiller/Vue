<?php

/*
 * This example uses Laravel to fetch the database data.
 */
Route::get('/test', function () {
    $tasks = App\Task::latest()->get();

    /*
     * This is a great way to print out json ($tasks is in JSON format
     * when returned from Eloquent).  json_decode turns the JSON into a PHP Object
     * that's easier to use.

    echo "<pre>";
    $phpObject = json_decode($tasks);
    var_dump($phpObject[0]->id);
    var_dump($phpObject[0]->activity);
    exit(1);

    */
    return view('index', compact('tasks'));
});

/*
 * This example uses Vue to fetch the database data with Ajax
 */
/*
 * This route is in c:/xampp/htdocs/jsonApp while
 * this copy of the app is in c:/xampp/htdocs/vue2/jsonApp/public/index.php
Route::get('http://jsonapp.localhost/', function(){
    // Provide an API for Vue to access the data from, which is all of the tasks in JSON format.
    $tasks = App\Task::latest()->get();
    return $tasks;
});
*/

Route::get('/', function(){
    return view('ajax');
});