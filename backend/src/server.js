const express = require('express');
const cors = require('cors');
const repository = require('./repository/todo');
const todoService = require('./service/todo')(repository);

const server = () => {
  const server = express();
  server.use(express.json());
  server.use(cors());

  //GET
  server.get('/api/todo', async (req, res) => {
    res.json(await todoService.getTodos());
  });


  // POST
  server.post('/api/todo', async(req, res) => {
    const newTodo = await todoService.addTodo(req.body);
    res.json(newTodo);

  })

  /**
  POST /api/todo
  {
   "task": "Some API"
  }

   {
    "todos": [
      {
        "task": "Some API"
      }
    ]
   }
  **/

  return server;
};
module.exports = server;