//JunyongChoi (101539862)
const fs = require('fs');
const path = require('path');

dir = path.join(process.cwd(), 'Logs');

if(fs.existsSync(dir)) {
    const files = fs.readdirSync(dir);
    
    files.forEach((file)=>{
        console.log(`delete files...${file}`);
        fs.unlinkSync(path.join(dir, file));
    });
 
    fs.rmdirSync(dir);
}


