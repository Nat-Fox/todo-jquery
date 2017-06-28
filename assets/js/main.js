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
                $('#nueva-tarea').append('<div class="padre-input"><input type="checkbox" id="new-task" />' + '<label for="new-task" id="">' + task + '</label>' + '<a class="waves-effect btn btn-remover">Remover</a><br></div>');
            }
        }

        // Remuevo las tareas
        $('a').click(function() {
            $(this).parent().remove();
        });
    });



});