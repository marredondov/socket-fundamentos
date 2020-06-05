var socket = io();

//Escuchar información
socket.on('connect', function() {
    console.log(`Conectado al servidor`);
})
socket.on('disconnect', function() {
    console.log('Perdimos conexión con el servidor');
})

// Enviar información
socket.emit('enviarMensaje', {
    usuario: 'Miguel',
    mensaje: 'Hola Mundo'
}, function(resp) {
    console.log(resp);
});

// escuchar informacion de mensaje enviado desde el servidor
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor:', mensaje);
})