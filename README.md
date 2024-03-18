Playwright Tests for Web and API Interactions

This repository contains Playwright TypeScript code for automating tests on web pages and interacting with APIs. The code demonstrates searching for "iPhone" on Amazon and performing basic CRUD (Create, Read, Update, Delete) operations on the Reqres.in API.

Requirements:

Node.js and npm (or yarn) installed on your system.
Basic understanding of Playwright and TypeScript.
Installation:

1. Clone this repository:

git clone https://github.com/your-username/playwright-tests.git

2. Install dependencies:

cd playwright-tests
npm install

Running Tests:

1. To run the tests:

npx playwright test Search_API.spec.js

Code Structure:

- webTest.spec.ts: Contains the test for searching iPhone on Amazon.
- apiTest.spec.ts: Contains the tests for interacting with Reqres.in API.

Test Descriptions:

Search for iPhone on Amazon:

Opens https://www.amazon.com/ in a new Playwright browser.
Fills the search bar with "iPhone".
Clicks the "Go" button.
Waits for search results to load.
Extracts the text of the third search result and asserts it contains "Apple iPhone".
API Testing with Playwright on Reqres.in:

Defines a base URL for the Reqres.in API.

Defines sample user data for POST and PUT requests.

GET /users:

Sends a GET request to retrieve a list of users.
Verifies a successful response (status code 200).
Parses the JSON response and asserts that the total number of users is greater than 0.
POST /users:

Sends a POST request to create a new user.
Verifies a successful response (status code 201).
Parses the JSON response and asserts that the created user object has an "id" and "createdAt" property.
PUT /users/:id:

Defines a user ID to update (modify as needed).
Defines updated user data.
Sends a PUT request to update the specified user.
Verifies a successful response (status code 200).
DELETE /users/:id:

Defines a user ID to delete (modify as needed).
Sends a DELETE request to delete the specified user.
Verifies a successful response (status code 200 or 204, depending on the API).
Additional Notes:

You may need to replace "https://reqres.in/api" with the correct base URL if using a different API.
Modify user data or IDs in the API tests according to your requirements.
Consider adding more comprehensive assertions and error handling for robust test cases.
This README.md file provides a clear overview of your Playwright tests, the testing approach, how to run the tests, and essential details about the test structure and functionality. Feel free to tailor it further as your tests evolve.


