$(document).ready(function() {

    $('body').keyup(function(tecla) {
        // Ocurre cuando presionas enter
        if (tecla.keyCode == 13) {
            // Recibe el valor ingresado en el input
            var task = $('#task').val();
            console.log(task);
            // si no ingresan
            if (task === '') {
                alert('Debes ingresar una tarea');
            } else {
                // Si ingresan algo lo apendo
                $('#comentarios').append('<input type="checkbox" id="task-completed" />' + '<label for="task-completed">' + task + '</label><br>');
            }
        }
    });
});


// '<div><span class="center-align">' + name + '</span><p class="center-align">' + message + '</p></div>'
//      <input type="checkbox" id="task-completed" />


// '<label for="task-completed">Task completed example</label>'