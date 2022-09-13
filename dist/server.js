import express from 'express';
const app = express();
app.get('/ads', (req, res) => {
    console.log('acessou ads');
    res.json({ teste: "teste" });
});
app.listen(3333);
