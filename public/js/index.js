var socket = io();
// creating events for index.html file
socket.on('connect', function() {
console.log('Connected to Server');
});

socket.on('disconnect', function() {
console.log('Disconnected from server');
});

socket.on('newMessage', function(message) {
console.log('newMessage', message);
});