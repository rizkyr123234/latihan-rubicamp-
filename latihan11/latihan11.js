
const fs = require('fs');
const readline = require('readline');


 
  const data = fs.readFileSync('data.json', 'utf8');
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'tebak'
  });
  let pertanyaan = JSON.parse(data)
  let i = 0 
  console.log(pertanyaan[i].definition)
  rl.prompt()
  rl.on('line', (jawabannya) => {

 
    if(pertanyaan[i].term == jawabannya.trim()){
      console.log('anda benar')
    } else{console.log('anda salah')}
   i++
   if(i>= pertanyaan.length){rl.close()}
   console.log(pertanyaan[i].definition)
   rl.prompt()
  }).on('close', () => {
    console.log('goood bye');
    process.exit(0);
  });



