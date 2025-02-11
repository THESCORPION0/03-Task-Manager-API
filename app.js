const express = require('express');
const tasks = require('./routes/tasks.js');
const connectDB = require('./db/connect.js')
require('dotenv').config()
const notFound = require('./middleware/not-found.js')
const errorHandlerMiddleware = require('./middleware/error-handler.js')

const app = express();

// middleware
app.use(express.static('./public'))
app.use(express.json());

// routes
app.use('/api/v1/tasks', tasks);

app.use(notFound)
app.use(errorHandlerMiddleware)
const PORT = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    console.log("CONNECTED TO DB...");

    app.listen(PORT, () => {
      console.log(`Server is listening on PORT ${PORT}....`);
    });
  } catch (error) {
    console.error("Error starting the server:", error);
  }
}

start();


