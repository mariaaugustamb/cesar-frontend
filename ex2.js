const express = require('express');
const ex2 = express();

ex2.use(express.json());       
ex2.use(express.urlencoded({extended: true})); 

ex2.get("/", (req, res) => {
    res.sendFile("../ex2.html");
  });

ex2.post("/", (req, res) => {
    const cnpj = req.body.cnpj;
    const email = req.body.email;
    const razao = req.body.razao;
    const isencao = req.body.isencao;
    const contratacao = req.body.contratacao;
    const faturamento = req.body.faturamento;
    const atividades = req.body.atividades;
    const site = req.body.site;
    const contrato = req.body.contrato;
    const telefone = req.body.telefone;

    console.log("CNPJ: " + cnpj);
    console.log("Email: " + email);
    console.log("Razao: " + razao);
    console.log("Isencao: " + isencao);
    console.log("Contratacao: " + contratacao);
    console.log("Faturamento: " + faturamento);
    console.log("Atividades: " + atividades);
    console.log("Site: " + site);
    console.log("Contrato: " + contrato);
    console.log("Telefone: " + telefone);

    res.send("Data received");
});

ex2.listen(3000);
