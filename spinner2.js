process.stdout.write('hello from spinner1.js... \rheyyy\n');
let timer = 100;
let spinner = '\r|\r/\r-\r\\\r|\r|\r/\r-\r\\\r|';
for (let char of spinner) {
  setTimeout(() => {
    process.stdout.write(char);
  }, timer += 100);
}