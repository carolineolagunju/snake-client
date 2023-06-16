const IP = '172.31.56.240';
const PORT = 50541;
const userName = process.argv.slice(2);
const EXIT_GAME = '\u0003';

const movementKeys = {
  w: "Move: up",
  a: "Move: left",
  s: "Move: down",
  d: "Move: right"
};

const cannedMsg = {
  l: "I am coming for you",
  k: "gotcha",
  j: "Man down"
};


module.exports = {
  IP,
  PORT,
  userName,
  movementKeys,
  EXIT_GAME,
  cannedMsg
};