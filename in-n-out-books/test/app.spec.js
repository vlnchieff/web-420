const request = require('supertest');
const express = require('express');
const app = require('./app'); // assuming app.js exports your Express instance
const books = require('./database/books'); // mock database module

describe('Chapter 5: API Tests', () => {

  beforeEach(() => {
    // Reset or mock the database state before each test
    books.data = [
      { id: 1, title: 'Web Dev for Vikings', author: 'Chieff Weaver' },
      { id: 2, title: 'MongoDB Mastery', author: 'Tech Titan' }
    ];
  });

  // a. Should return an array of books
  test('Should return an array of books', async () => {
    const response = await request(app).get('/api/books');

    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
    expect(response.body.length).toBeGreaterThan(0);
    expect(response.body[0]).toHaveProperty('id');
    expect(response.body[0]).toHaveProperty('title');
    expect(response.body[0]).toHaveProperty('author');
  });

  // b. Should return a single book
  test('Should return a single book', async () => {
    const response = await request(app).get('/api/books/1');

    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Object);
    expect(response.body).toEqual(
      expect.objectContaining({
        id: 1,
        title: 'Web Dev for Vikings',
        author: 'Chieff Weaver'
      })
    );
  });

  // c. Should return a 400 error if the id is not a number
  test('Should return 400 if ID is not a number', async () => {
    const response = await request(app).get('/api/books/not-a-number');

    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty('error');
    expect(response.body.error).toMatch(/must be a number/i);
  });

});
