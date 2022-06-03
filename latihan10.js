// const func6 = require('./latihan5Dan6.js')
// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.question('tulis kalimatmu disini', (jawaban)=>{
//     console.log(`hasil konversi: ${func6.kalimat(jawaban.trim())} `)
    
// })
const func6 = require('./latihan5Dan6.js')
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'tulis kalimat disini'
});

rl.prompt();

rl.on('line', (line) => {
  console.log(`kalimatmu disini ${func6.kalimat(line.trim())}`)
  rl.prompt();
}).on('close', () => {
  console.log('goood bye');
  process.exit(0);
});