var socket = io();

var searchParams = new URLSearchParams(window.location.search);

if (!searchParams.has('escritorio')) {
    window.location = 'index.html';
    throw new Error(' El scritorio es necesario');
}

var escritorio = searchParams.get('escritorio');
var label = $('small');

console.log(escritorio);
$('h1').text('Escritorio ' + escritorio);

$('button').on('click', function() {
    console.log(escritorio);

    socket.emit('atenderTicket', { escritorio: escritorio }, function(resp) {

        if (resp === 'No hay tickets') {
            label.text(resp);
            alert(resp);
            return
        }
        label.text('Ticket ' + resp.numero);

    });
});




socket.on('disconnect', function() {
    console.log('Se ha perdido la conexion al servidor');

});

socket.on('estadoActual', function(resp) {});