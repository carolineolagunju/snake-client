const {movementKeys, EXIT_GAME, cannedMsg } = require('./constants');

let connection;

// setup interface to handle user input
const setupInput = function(conn) {
  connection = conn;
  let moveInterval;

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();


  //handles user input
  const handleUserInput = (key) => {
    key = key.toLowerCase();

    //exit when user press ctrl + c
    if (key === EXIT_GAME) {
      process.exit();
    }

    //continious snake movement
    const snakeMoves = function(moves) {
      moveInterval = setInterval(() => {
        connection.write(moves);
      }, 150);
    };

    const moves = movementKeys[key];

    //if new movement, snake continously moves in the specified direction
    if (moves) {
      clearInterval(moveInterval);
      snakeMoves(moves);
    }

    //canned messages
    for (const msg in cannedMsg) {
      if (key === msg) {
        connection.write(`Say: ${cannedMsg[msg]}`);
      }
    }
  };
  
  stdin.on('data', handleUserInput);

  return stdin;
};

module.exports = { setupInput };