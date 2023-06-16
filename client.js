const net = require('net');
const {IP, PORT, userName} = require('./constants');


//function to establish a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  //interprets incoming data as text
  conn.setEncoding = ('utf8');

  //listens to incoming data from server
  conn.on('data', data => {
    console.log('server says: ', data);
  });

  //function to be triggered when there is a successful connection to the server
  conn.on('connect', () => {
    console.log('Successfully connected to the game server');

  //commandline argumant to type in userName upon connection (maximum of 3 character)
    conn.write(`Name: ${userName}`);
  });

  return conn;
};

module.exports = {connect};