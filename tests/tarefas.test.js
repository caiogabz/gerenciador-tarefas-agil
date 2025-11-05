const request = require('supertest');
const express = require('express');
const app = require('../src/index'); // ajuste se necessário

describe('Testes de tarefas', () => {
  it('Deve criar uma nova tarefa', async () => {
    const res = await request(app)
      .post('/tarefas')
      .send({ titulo: 'Nova tarefa' });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('id');
  });
});
