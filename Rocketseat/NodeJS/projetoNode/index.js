const questions = [
    "Qual seu nome:",
    "O que aprendi hoje?",
    "O que me deixou aborrecido? E o que eu poderia fazer para melhorar?",
    "O que me deixou feliz hoje?",
    "Quantas pessoas ajudei hoje?"
];

const ask = (i = 0 ) => {
    process.stdout.write("\n\n\n" + questions[i] + ">")
} 

ask()

const answers = []
process.stdin.on("data", data => {
    answers.push(data.toString().trim())
    if (answers.length < questions.length) {
        ask(answers.length)
    } else {
        // for (let i = 0; i < questions.length; i++) {
        //     console.log(questions[i]);
        //     console.log(answers[i]);
        // }
        process.exit();
    }
})

process.on('exit', () => {
    console.log(`
        Bacana ${answers[0]}!

        O que você aprendeu hoje foi:
        ${answers[1]}

        O que me deixou aborrecido? E o que eu poderia fazer para melhorar?
        ${answers[2]}

        O que me deixou feliz hoje?
        ${answers[3]}
        
        Quantas pessoas ajudei hoje?
        ${answers[4]}

        Volter amanhã para novas reflexções!
    `)
});