// module.exports = "Enviando dados do meu módulo"


function getFlags(flag) {
    const index = process.argv.indexOf(flag) + 1;
    return process.argv[index]
}

module.exports = getFlags