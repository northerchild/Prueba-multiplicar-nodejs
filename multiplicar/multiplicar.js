//requires
const fs = require('fs');
const colors = require ('colors');

//const fs = require('express');
//const fs = require('./fs');

let listarTabla = (base, limite = 10)=>{
	console.log('==================='.green)
	console.log(`Tabla del ${base}`.green)
	console.log('==================='.green)
	for (let i = 1; i <= limite; i++) {
		 	console.log(`${base} * ${i} = ${base * i}`);
		 } 
}

let crearArchivo = (base, limite = 10)=>{
	return new Promise((resolve,reject)=>{
		if (!Number(base)) {
			reject(`El valor introducido ${base} no es valido`);
			return
		}
		let data=""

		for (let i = 1; i <= limite; i++) {
		 	data+= `${base} * ${i} = ${base * i}\n`;
		 } 

		fs.writeFile(`tablas/tabla-${base}-hasta el ${limite}.txt`, data, (err) => {
		  if (err) 
		  	reject(err);
		  else(`tabla-${base}-al-${limite}.txt`)
		});
	})
}

module.exports = {
	crearArchivo,
	listarTabla	
}