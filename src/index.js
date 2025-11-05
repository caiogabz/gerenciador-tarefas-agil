const express = require('express');
const app = express();
app.use(express.json());

let tarefas = [];
let id = 1;

app.get('/tarefas', (req, res) => res.json(tarefas));

app.post('/tarefas', (req, res) => {
  const tarefa = { id: id++, ...req.body };
  tarefas.push(tarefa);
  res.status(201).json(tarefa);
});

app.put('/tarefas/:id', (req, res) => {
  const index = tarefas.findIndex(t => t.id == req.params.id);
  if (index === -1) return res.status(404).send('Tarefa não encontrada');
  tarefas[index] = { id: parseInt(req.params.id), ...req.body };
  res.json(tarefas[index]);
});

app.delete('/tarefas/:id', (req, res) => {
  tarefas = tarefas.filter(t => t.id != req.params.id);
  res.status(204).send();
});

app.listen(3000, () => console.log('Servidor rodando na porta 3000'));
