

const { test, expect } = require('@playwright/test');

test('Search for iPhone on Amazon', async ({ page }) => {
  await page.goto('https://www.amazon.com/');
  await page.fill('#twotabsearchtextbox', 'iPhone');
  await page.click('input[value="Go"]');
  await page.waitForSelector('h2 a span');
  const firstResultText = await page.$eval('(//h2//a//span)[3]', (element) => element.textContent);
  expect(firstResultText).toContain('Apple iPhone');
  await page.close();
});



test.describe('API Testing with Playwright on Reqres.in', () => {
 const baseURL = 'https://reqres.in/api';
const userData = {
  'name': 'John Doe',
  'job' : 'Software Engineer',
};
  test('GET /users - Retrieve a list of users', async ({ page, request }) => {
    const response = await request.get(`${baseURL}/users`);
    expect(response.ok()).toBe(true);

    const users = await response.json();
    expect(users.total).toBeGreaterThan(0); 
  });

  test('POST /users - Create a new user', async ({ page, request }) => {
    const response = await request.post(`${baseURL}/users`, userData);
    expect(response.ok()).toBe(true); 
    const createdUser = await response.json();
    expect(createdUser).toHaveProperty('id');
    expect(createdUser).toHaveProperty('createdAt');
   
  });

  test('PUT /users/:id - Update a user', async ({ page, request }) => {
    const userIdToUpdate = 2; 
    const updatedUserData = { ...userData, job: 'Senior Software Engineer' }; 
    const response = await request.put(`${baseURL}/users/${userIdToUpdate}`, updatedUserData);
    expect(response.ok()).toBe(true); 
  });

  test('DELETE /users/:id - Delete a user', async ({ page, request }) => {
    const userIdToDelete = 1; 
    const response = await request.delete(`${baseURL}/users/${userIdToDelete}`);
    expect(response.ok()).toBe(true); 
  });
});
