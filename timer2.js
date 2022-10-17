const readline = require('readline');
readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);
let numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9']

process.stdin.on('keypress', (str, key) => {
  if (key.ctrl && key.name === 'c') {
    console.log(`Bye~`)
    process.exit();
  } else if (key.name === 'b') {
    console.log(`You pressed the "${str}" key, it should beep.`);
    process.stdout.write('\x07');
  } else if (numbers.includes(key.name)) {
    console.log(`Setting timer for ${key.name} seconds, it should beep after ${key.name} seconds.`);
    setTimeout(() => {
      process.stdout.write('\x07');
    }, Number(key.name) * 1000);
  } else {
    console.log(`You pressed the "${str}" key`);
  }
});
console.log('Please press any key, press Ctrl + C to exit');