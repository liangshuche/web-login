const express = require('express');
const socket = require('socket.io');

const app = express();


const server = app.listen(5000, () => {
  console.log('server is running on port 5000');
});

const io = socket(server);

const userList = [
  { username: 'tony', password: '123' , age: '20'},
];



io.on('connection', (socket) => {
  console.log(`Socket ID: ${socket.id} connected`);


  socket.on('LOGIN', (data) => {
    console.log(data);
    let user = userList.find(function(e) {
      console.log(e);
      return e.username === data.username;
    });
    console.log(user);
    if ( user && user.password === data.password){
      io.emit('RECEIVE_LOGIN', data.username);    
    }
    else {
      io.emit('LOGIN_ERROR');
    }
  });

  socket.on('REGISTER', (data) => {
    userList.push(data);
    console.log(data);
  });

  socket.on('LOGOUT', () => {
    io.emit('RECEIVE_LOGOUT');
  });
});

