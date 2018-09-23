//requires
const fs = require('fs');
//const fs = require('express');
//const fs = require('./fs');
let data=""
let base = 7;
for (let i = 1; i <= 10; i++) {
 	data+= `${base} * ${i} = ${base * i}\n`;
 } 

fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
  if (err) throw err;
  console.log('El archivo a sido creado');
});