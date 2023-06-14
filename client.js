const net = require('net');


//establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: '172.31.56.240',
    port: 50541,
  });

  //interpret incoming data as text
  conn.setEncoding = ('utf8');


  //listen to incoming data
  conn.on('data', data => {
    console.log('server says: ', data);
  })


  return conn;
};

console.log('Connecting ....');

//calling function connect
connect();

module.exports = {connect};