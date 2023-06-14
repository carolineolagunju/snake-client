const net = require('net');


//establishes a connection with the game server
const connect = function() {

  const conn = net.createConnection({
    host: '172.31.56.240',
    port: 50541,
  });

  //interpret incoming data as text
  conn.setEncoding = ('utf8');


  //listen to incoming data from game server
  conn.on('data', data => {
    console.log('server says: ', data);
  });

  
  //function to be triggered when there is a successful connection to the game server
  conn.on('connect', () => {
    console.log('Successfully connected to the game server');

    conn.write('Name: Ola');
  });

  return conn;
};

console.log('Connecting ....');

//calling function connect
connect();

module.exports = {connect};