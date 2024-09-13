$(document).ready(function() {
    function saveTasks() {
        const tasks = $('.task-item').map(function() {
            return $(this).text();
        }).get();
        const tasksJSON = JSON.stringify(tasks);
        document.cookie = `tasks=${encodeURIComponent(tasksJSON)}; expires=${new Date(Date.now() + 86400000).toUTCString()}; path=/`;
    }

    function loadTasks() {
        const cookieValue = document.cookie.split('; ').find(row => row.startsWith('tasks='));
        if (cookieValue) {
            const tasksJSON = decodeURIComponent(cookieValue.split('=')[1]);
            try {
                const tasks = JSON.parse(tasksJSON);
                $('#ft_list').empty();
                $(tasks.slice().reverse()).each(function(index, task) {
                    addTask(task);
                });
            } catch (e) {
                console.error("Error parsing tasks from cookie:", e);
            }
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

    loadTasks();
});