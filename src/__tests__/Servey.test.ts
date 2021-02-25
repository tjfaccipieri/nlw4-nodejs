import request from 'supertest';
import { app } from '../app';
import createConnection from '../database';

describe('Surveys', () => {
  beforeAll(async () => {
    const connection = await createConnection();
    await connection.runMigrations();
  });

  it('Deveria conseguir criar uma nova pesquisa', async () => {
    const response = await request(app).post('/surveys').send({
      title: 'Title Example',
      description: 'description Example',
    });

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('id');
  });

  it('Deveria ser possivel pegar todas as pesquisas', async () => {
    await request(app).post('/surveys').send({
      title: 'Title example 2',
      description: 'Description example 2',
    });

    const response = await request(app).get('/surveys');
    expect(response.body.length).toBe(2);
  });
});
