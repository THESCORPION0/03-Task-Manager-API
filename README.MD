# My Way to Learn NodeJS - Build a Task Manager API

This repo contains every my first project in learning Backend using express.js it help people to organize their tasks and create their own tasks for them.

### Prerequisites

- Node.js
- npm (Node Package Manager)
- MongoDB

## Getting Started

### Endpoints

- `GET /api/v1/tasks `- Retrieve all tasks
- `POST /api/v1/tasks` - Create a new task
- `GET /api/v1/tasks/:id` - Retrieve a single task by ID
- `PATCH /api/v1/tasks/:id` - Update a task by ID
- `DELETE /api/v1/tasks/:id` - Delete a task by ID

### Usage

1. Clone the repository.
2. Create a `.env` file in the root directory and add your MongoDB URI and PORT Number:
    ```
    MONGO_URI=your_mongo_uri
    PORT=5000
    ```
3. Run `npm install` to install dependencies.
4. Run `npm start` to start the server.
5. Use a tool like Postman to test the endpoints.

### Technologies Used

- Node.js
- Express.js
- MongoDB
- dotenv
- express-async-errors
- http-status-codes
- mongoose