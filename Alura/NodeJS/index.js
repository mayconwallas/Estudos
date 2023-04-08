import fs from 'fs';
import chalk from 'chalk';

function pegaArquivo(caminhoArquivo) {
    const encoding = 'utf-8'
    fs.readFile(caminhoArquivo, encoding, (_, texto) =>{
        console.log(chalk.green(texto));
    });
}


pegaArquivo('./arquivos/texto.md');