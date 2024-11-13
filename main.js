$(document).ready(function() {
    $('#form-tarefa').on('submit', function(event) {
        event.preventDefault();
        
    var tarefa = $('#tarefa').val();
    if (tarefa.trim() !== '') {
        $('#lista-tarefas').append('<li>' + tarefa + '</li>');
        $('#tarefa').val(''); 
    }
    });

    $('#lista-tarefas').on('click', 'li', function() {
        $(this).toggleClass('completed');
    });
});