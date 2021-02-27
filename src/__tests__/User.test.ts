import request from 'supertest';
import { getConnection } from 'typeorm';
import { app } from '../app';
import createConnection from '../database';

describe('Users', () => {
  beforeAll(async () => {
    const connection = await createConnection();
    await connection.runMigrations();
  });

  afterAll(async () => {
    const connection = getConnection();
    await connection.dropDatabase();
    await connection.close();
  });

  it('Deveria conseguir criar um usuário', async () => {
    const response = await request(app).post('/users').send({
      email: 'user@example.com',
      name: 'User Example',
    });

    expect(response.status).toBe(201);
  });

  it("Não deveria dar pra criar usuário com e-mail repetido", async()=>{
    const response = await request(app).post('/users').send({
      email: 'user@example.com',
      name: 'User Example',
    });
    expect(response.status).toBe(400);
  })
});
