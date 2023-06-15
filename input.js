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
      if (key === '\u0003') {
        process.exit();
      }

      if (key === 'w') {
        connection.write('Move: up');
      }

      if (key === 'a') {
        connection.write('Move: left');
      }

      if (key === 's') {
        connection.write('Move: down');
      }

      if (key === 'd') {
        connection.write('Move: right');
      }

      if (key === "l") {
        connection.write(`Say: I am coming for you`)
      }

      if (key === "k") {
        connection.write(`Say: gotcha`)
      }
    });
  };
  handleUserInput();

  return stdin;
};

//setupInput();

module.exports = {setupInput};