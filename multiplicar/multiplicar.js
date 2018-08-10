//require's todos al inico
const fs = require('fs');
const colors = require('colors');

let crearArchivos = (base, limite = 10) => {
	let datos = "";

	return new Promise((resolve, reject) => {

		if(!Number(base)) {
			reject(`El valor introducido en base ${ base } no es un numero`);
			return;
		}
		else{
			if (!Number(limite)) {
				reject(`El valor introducido de limite ${ limite } no es un numero`);
			}
			else {
				for(let i = 1; i <= limite; i++) {
					datos += `${ base } * ${ i } = ${ base * i } \n`;
				}

				fs.writeFile(`./tablas/tabla-${ base }.txt`, datos, (err) => {
					if(err) reject(err);
					else resolve(`tabla-${ base }-al-${ limite }.txt`);
				});
			}
		}
	});
};

let listarTabla = (base, limite = 10) => {
	return new Promise((resolve, reject) => {
		if(!Number(base)){
			reject(`El valor introducido en base ${ base } no es un numero`);
			return;
		}
		else {
			if(!Number(limite)) {
				reject(`El valor introducido de limite ${ limite } no es un numero`);
				return;		
			}
			else {
				console.log('========================'.green);
				console.log(`Tabla de  ${ base }`.green);
				console.log('========================'.green);

				for(let i = 1; i <= limite; i++) {
					console.log(`${ base } * ${ i } = ${ base * i }`);
				}
			}
		}
	});
};

/*es un objeto global y en el modulo exports se guardaran las funciones que necesitamos en otras partes*/
module.exports = {
	crearArchivos,
	listarTabla
};