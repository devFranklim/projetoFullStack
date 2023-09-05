const express = require("express");
const path = require("path");

const basePath = path.join(__dirname, "/templates");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'))

app.get("/", (req, res) => {
    res.sendFile(`${basePath}/home.html`);
})

app.get("/:param1", (req, res) => {
    res.send(`
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="/css/style.css" />
        <title>React</title>
    </head>
        <main class="main">
            Parâmetro da requisição: ${req.params.param1}
        </main>
    `)
})

app.get("/cadastro", (_, res) => {
    res.sendFile(`${basePath}/cadastro.html`)
})

app.post("/cadastro/save", (req, res) => {
    console.log(req.body);
    res.redirect("/");
});



app.listen(5000, () => {
    console.log("App rodando!");
});