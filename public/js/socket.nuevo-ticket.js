//

var socket = io();

var label = $('#lblNuevoTicket')

socket.on('connect', function() {
    console.log('Conectado al servidor');

    // mi forma de hacer
    // socket.emit('estadoActual', null, function(resp) {
    //     label.text(resp);
    // });

});

socket.on('disconnect', function() {
    console.log('Se ha perdido la conexion al servidor');

});

socket.on('estadoActual', function(resp) {
    label.text(resp.actual);
});

$('button').on('click', function() {

    socket.emit('siguienteTicket', null, function(resp) {
        label.text(resp);
    });
});