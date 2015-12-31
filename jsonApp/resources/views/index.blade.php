<!DOCTYPE html>
<html lang="en">
<head>
    <title>Vue and Ajax</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
</head>
<body>
<div class="container">
    <h1>JSON task list reader</h1>
    {{--
    The $tasks variable gets converted to the "list" property (in main.js file where "props").
    However, Laravel knows to encode the $tasks anyways so that json_encode isn't necessary.
    Laravel knows to encode it because $tasks is a string without being encoded.
    --}}

    <tasks list="{{json_encode($tasks)}}"></tasks>

</div>

<template id="tasks-template">
    <ul class="list-group">
        {{-- "list" is then available here which got its value from $tasks above --}}
            <li class="list-group-item" v-for="task in list">
                <span>@{{ task.activity }}</span><span>&nbsp;X</span>
            </li>
    </ul>
</template>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
<script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
<script src="http://cdnjs.cloudflare.com/ajax/libs/vue/1.0.13/vue.min.js"></script>
<script src="main.js"></script>
</body>
</html>
