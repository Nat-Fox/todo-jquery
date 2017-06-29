$(document).ready(function() {

    var contadorTareas = 0;

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
                var tareas = [];
                // Si ingresan algo lo apendo                
                var contenido = $('#nueva-tarea').append('<div class="padre-input"><input class="col s12" type="checkbox" id="new-task-' + contadorTareas + '"/>' + '<label for="new-task-' + contadorTareas + '">' + task + '</label>' + '<a class="right waves-effect btn-small" id="new-task"><i class="material-icons tiny center">delete</i></a><br></div>');
                // Deja vacio el input luego de escribir en el 
                $('#task').val('');
                tareas.push(contenido);

                // completar las tareas por id             
                //console.log($('#new-task-' + contadorTareas));
                $('#new-task-' + contadorTareas).click(function() {
                    var completado = $('#comentarios-realizados').append($(this).parent());
                    //console.log(this.innerHTML)    
                });

                // <i class="material-icons tiny icon-demo">

                contadorTareas++;
            }
        }

        // Remuevo las tareas
        $('a').click(function() {
            $(this).parent().remove();
        });
    });

});