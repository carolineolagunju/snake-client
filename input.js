const {MOVE_UP_KEY, MOVE_LEFT_KEY, MOVE_DOWN_KEY, MOVE_RIGHT_KEY, EXIT_GAME, messages} = require('./constants');

let connection;

// setup interface to handle user input from stdin
const setupInput = function(conn) {
  connection = conn;

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

 
  //function that handles the input from the user
  const handleUserInput = function() {
    stdin.on('data', (key) => {
      //exit when user press ctrl + c on their keyboard
      if (key === EXIT_GAME) {
        process.exit();
      }

      if (key === MOVE_UP_KEY) {
        connection.write('Move: up');
      }

      if (key === MOVE_LEFT_KEY) {
        connection.write('Move: left');
      }

      if (key === MOVE_DOWN_KEY) {
        connection.write('Move: down');
      }

      if (key === MOVE_RIGHT_KEY) {
        connection.write('Move: right');
      }

      for (const msg in messages) {
        if (key === msg) {
          connection.write(`Say:  ${messages[msg]}`);
        }
      }
    });
  };
  handleUserInput();

  return stdin;
};

module.exports = {setupInput};