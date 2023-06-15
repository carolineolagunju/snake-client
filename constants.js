const IP = '172.31.56.240';
const PORT = 50541;
const arg = process.argv.slice(2);
const MOVE_UP_KEY = 'w';
const MOVE_LEFT_KEY = 'a';
const MOVE_DOWN_KEY = 's';
const MOVE_RIGHT_KEY = 'd';
const EXIT_GAME = '\u0003';
const messages = {
  l: "I am coming for you",
  k: "gotcha"
};

module.exports = {
  IP,
  PORT,
  arg,
  MOVE_UP_KEY,
  MOVE_LEFT_KEY,
  MOVE_DOWN_KEY,
  MOVE_RIGHT_KEY,
  EXIT_GAME,
  messages
};