const express = require('express');
const app = express();

app.set("view engine", "ejs");

app.get("/", function (req, res) {
    const items = [
        {
            title: "D",
            message: "esenvolver aplicações/sevições de forma fácil"
    },
    {
        title: "E",
        message: "JS usa JavaScript para renderizar HTML"
    },
    {
        title: "M",
        message: "uito fácil de usar"
    },
    {
        title: "A",
        message: "prendendo muito EJS"
    },
    {
        title: "I",
        message: "ncrivel tudo que se pode fazer com programação"
    },
    {
        title: "S",
        message: "empre progredindo nos Estudos"
    }
    ];

    const subtitle = "Uma linguagem de modelagem para criação de páginas HTML usando javaScript"
    res.render("pages/index", {
        qualitys: items,
        subtitle: subtitle,
    });
});

app.get("/sobre", function (req, res) {
    res.render("pages/about");
});

app.listen(8080);
console.log("Servidor OnLine");