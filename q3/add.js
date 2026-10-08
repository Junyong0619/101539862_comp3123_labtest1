//JunyongChoi (101539862)
const fs = require('fs');
const path = require('path');

// console.log(path.join(process.cwd(), 'Logs'));
if(!fs.existsSync('Logs')) fs.mkdirSync('Logs');

process.chdir('Logs');

for(let i = 0; i <10; i++){
    fs.writeFileSync(`log${i}.txt`, `Here is log number ${i}.`);
    console.log(`log${i}.txt`);
}

