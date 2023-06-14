// setup interface to handle user input from stdin
const setupInput = function() {

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  //exit when user press ctrl + c on their keyboard
  const handleUserInput = function() {
    stdin.on('data', (key) => {
      if (key === '\u0003') {
        process.exit();
      }
    });
  };
  handleUserInput();

  return stdin;
};

//setupInput();

module.exports = {setupInput};