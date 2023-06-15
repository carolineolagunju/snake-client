const net = require('net');
 const {IP, PORT, arg} = require('./constants');


//establishes a connection with the game server
const connect = function() {

  const conn = net.createConnection({
    host: IP,
    port: PORT
});

  //interpret incoming data as text
  conn.setEncoding = ('utf8');

  //listen to incoming data from server
  conn.on('data', data => {
    console.log('server says: ', data);
  });

  //function to be triggered when there is a successful connection to the server
  conn.on('connect', () => {
    console.log('Successfully connected to the game server');

    conn.write(`Name: ${arg}`);
  });

  return conn;
};

module.exports = {connect};