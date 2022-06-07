const fs = require('fs');
const readline = require('readline');
if(process.argv.length == 2){console.log('masukkan data soalnya ')}
else{
const soal = fs.readFileSync(process.argv[2], 'utf8');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'tebak'
});

let pertanyaan = JSON.parse(soal)
console.log(pertanyaan)
let i = 0
let salah = 0
console.log(pertanyaan[i].pertanyaan1)
rl.prompt()
rl.on('line', (jawabannya) => {

  if ('skip'== jawabannya.trim()) {
    pertanyaan.push(pertanyaan[i])
  } else if (jawabannya.trim() == pertanyaan[i].jawaban) {
    console.log('anda benar')
  }
  else {
    salah++
    console.log(`anda salah sebanyak ${salah}`)
  }

  i++
  if (i >= pertanyaan.length) { 
    console.log('anda menang') 
  }
  console.log(pertanyaan[i].pertanyaan1)
  rl.prompt()
}).on('close', () => {
  console.log('goood bye');
  process.exit(0);
});
}