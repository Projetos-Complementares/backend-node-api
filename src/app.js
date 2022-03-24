const express = require("express");
const { routes } = require("./routes");

const app = express();
const port = 4002;

app.get("/primeira", (req, res) => {
    return res.json({
        message:"hello world"
    });
})

app.post("/products", (request, response) => {
   const body = request.body;

   console.log(body)
});

app.listen(port, () =>{
    console.log(`Servidor esta rodando na porta ${port}`);
});