// server.js
const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.use(express.static('public'));

io.on('connection', (socket) => {
  console.log('a user connected');

  socket.on('joinRoom', (roomPassword) => {
    // هنا يمكنك التحقق من كلمة السر
    if (roomPassword === 'Nonty') {
      socket.join('dominoRoom');
      console.log('user joined domino room');
    } else {
      socket.emit('errorMessage', 'كلمة السر غير صحيحة');
    }
  });

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

http.listen(3000, () => {
  console.log('listening on *:3000');
});