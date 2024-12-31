import express from 'express';
const app = express();
app.use(express.json());
const users = []
const usuarios = [
  { id: 1, nome: 'João' },
  { id: 2, nome: 'Maria' },
  { id: 3, nome: 'José' },
  { id: 4, nome: 'Pedro' },
  { id: 5, nome: 'Paulo' },
];
app.post('/usuarios', (req, res) => {
  res.send('Ok Post Deu Certo');
console.log('POST /usuarios');
res.send('Ok Post Deu Certo');
});




app.get('/usuarios', (req, res) => {
  res.json(usrs);
});
app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});