
const argv = require('./config/yargs').argv;
const colors = require('colors/safe');

const { crearArchivos, listarTabla } = require('./multiplicar/multiplicar');//destruturacion de un archivo importado

let comando = argv._[0];

switch(comando) {
	case 'listar':
		//console.log(argv.base)
		listarTabla(argv.base, argv.limite)
			.then(mensaje => console.log(mensaje))
			.catch(err => console.log(err));
		break;
	case 'crear':
		crearArchivos(argv.base, argv.limite)
			.then(archivo => console.log(`Archivo creado:`, colors.yellow(archivo)))
			.catch(err => console.log(err));
		break;
	default:
		console.log('comando no reconocido');
		break;
}

//console.log(argv);
//console.log('Limite: ', argv.limite);

/*Funcion para recojer valores de consola o terminal*/
//let argv = process.argv;//process.arvg 	son los argumentos existentes
//let parametro = argv[2];//recive el argumento en la posicion 2 eje: node app "-b=2"(este es el argumento que recive)
//let base = parametro.split('=')[1];