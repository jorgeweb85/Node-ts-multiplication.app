/*  MI RESOLOCUIN
import fs from 'fs';


let  texto = `
==================================================
                Tabla del 5
==================================================
`;



for(let i = 1; i <= 10; i++){

    let salida = ` 5 x ${i} = ${ 5*i}`;
 

    texto = `${texto} \n ${salida}`
}


console.log(texto)

// guardan en arhcivo

fs.writeFileSync(`outputs/tabla-5.txt`,  texto);



 */


/* RESOLUCION FERNANDO */


import fs from 'fs';
import { yarg } from './config/plugins/yargs.plugin';

const { b:base, l:limit, s:showTable } = yarg;

let outputMessage = "";
const headerMessage = `
==================================================
                Tabla del ${base}
==================================================\n
`;

for(let i = 1; i <= limit; i++){

    outputMessage += `${base} x ${i} = ${ base * i} \n`
}

outputMessage = headerMessage + outputMessage;

if( showTable ){

    console.log(outputMessage);
}

const outputPath = 'outputs'
fs.mkdirSync(outputPath,{recursive: true})

fs.writeFileSync(`${ outputPath }/tabla-${base}.txt`, outputMessage);

console.log("File created!");
