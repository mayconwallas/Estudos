import  Express from "express";

const app = Express();
app.use(Express.json());

const livros = [
  {
    id: 1,
    titulo: "O Senhor dos Anéis",
  },
  {
    id: 2,
    titulo: "O Hobbit",
  },
  {
    id: 2,
    titulo: "Harry Potter e a pedra filosofal",
  },
]

function buscaLivro(id) {
    return livros.findIndex(livro => {
        return livro.id === Number(id);
    });
}

app.get("/", (req, ress) => {
    ress.status(200).send("Curso de node.js");
});

app.get("/livros", (req, ress) => {
    ress.status(200).json(livros);
});

app.get("/livros/:id", (req, ress) => {
    const index = buscaLivro(req.params.id);
    ress.status(201).json(livros[index]);
});

app.post("/livros", (req, ress) => {
    livros.push(req.body);
    ress.status(201).send("Livro cadastrado.");
});

app.put("/livros/:id", (req, ress) => {
    const index = buscaLivro(req.params.id);
    livros[index].titulo = req.body.titulo;
    ress.status(200).json(livros);
});

app.delete("/livros/:id", (req, ress) => {
    const index = buscaLivro(req.params.id);
    livros.splice(index, 1);
    ress.status(200).send("deletado!");
});

export default app;