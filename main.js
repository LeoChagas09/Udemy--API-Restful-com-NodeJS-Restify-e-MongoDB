const fatorial = require('./fatorial')

console.log('n-fatorial')

const argv = require('yargs').demandOption('num').argv

/*console.log(`Executando o script a partir do diretorio ${process.cwd()}`)

process.on('exit', () => {
    console.log('script está prestes a terminar')
}) */

const num = argv.num

console.log(`O Fatorial de ${num} é igual a ${fatorial(num)}`)

console.log(module.paths)