import request from 'supertest';
import app from '../app.js';

beforeAll(() => {
    // TODO: setup database connections, etc.
});

afterAll(() => {
    // TODO: close database connections, etc.
});

describe('HealthRouter', () => {
    it('should return a 200 response', async () => {
        const response = await request(app).get('/health');

        expect(response.statusCode).toBe(200);
    });
});
