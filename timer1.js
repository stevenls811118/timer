let input = process.argv.slice(2);

const timer = (input) => {
  for (let i of input) { 
    if (Number(i) !== NaN && Number(i) >= 0) {
      setTimeout(() => {
        process.stdout.write('\x07');
      }, 1000 * Number(i));
    }
  }
};

timer(input);