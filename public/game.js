// game.js
const socket = io();

document.getElementById('joinGame').addEventListener('click', function() {
  var password = document.getElementById('roomPassword').value;
  socket.emit('joinRoom', password);
});

socket.on('errorMessage', (message) => {
  document.getElementById('errorMessage').innerText = message;
});
