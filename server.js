const express = require('express');

//Router import here
const ProjectsRouter = require('./projects/projects-router');

//Global Middleware here
const server = express();

server.use(express.json());

server.get('/', (req, res) => {
res.send(`<h2> Node db Sprint Project is UP! </h2>`)

})

server.use('/api/projects', ProjectsRouter);

module.exports = server;