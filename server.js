import express from 'express';
const app = express();

const usuarios = [
  { id: 1, nome: 'João' },
  { id: 2, nome: 'Maria' },
  { id: 3, nome: 'José' },
  { id: 4, nome: 'Pedro' },
  { id: 5, nome: 'Paulo' },
];
app.post('/usuarios', (req, res) => {
console.log('POST /usuarios');
res.send('Ok');
});




app.get('/usuarios', (req, res) => {
  res.send('Ok Deu Certo');
});
app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});