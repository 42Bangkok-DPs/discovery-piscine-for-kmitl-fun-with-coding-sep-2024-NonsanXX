$(document).ready(function() {
    function saveTasks() {
        const tasks = $('.task-item').map(function() {
            return $(this).text();
        }).get();
        document.cookie = `tasks=${JSON.stringify(tasks)}; expires=${new Date(Date.now() + 86400000).toUTCString()}; path=/`;
    }

    function loadTasks() {
        const cookie = document.cookie.split('; ').find(row => row.startsWith('tasks='));
        if (cookie) {
            const tasks = JSON.parse(cookie.split('=')[1]);
            $(tasks.slice().reverse()).each(function(index, task) {
                addTask(task);
            });
        }
    }

    function addTask(taskText) {
        const $taskElement = $("<div>")
            .text(taskText)
            .addClass("task-item")
            .click(function() {
                if (confirm("Do you want to remove this task?")) {
                    $(this).remove();
                    saveTasks();
                }
            });

        $("#ft_list").prepend($taskElement);
    }

    $("#newbtn").click(function() {
        let newtodo = prompt("Enter your task!");
        if (newtodo != null && newtodo.trim() !== "") {
            addTask(newtodo);
            saveTasks();
        }
    });

    $(window).on('load', loadTasks);
});