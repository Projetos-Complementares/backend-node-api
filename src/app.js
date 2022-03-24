const express = require("express");

const app = express();
const port = 4002;

app.get("/primeira", (req, res) => {
    return res.json({
        message:"hello world"
    });
})

app.listen(port, () =>{
    console.log(`Servidor esta rodando na porta ${port}`);
});