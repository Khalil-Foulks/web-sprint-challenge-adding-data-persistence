const express = require("express");

const Projects = require("./projects-model");

const router = express.Router();


router.get("/", (req, res) => {
    Projects.getProjects()
        .then(projects => {
            res.json(projects);
        })
        .catch(err => {
            res.status(500).json({ message: "Failed to get projects" });
        });
});

router.get("/resources", (req, res) => {
    Projects.getResources()
        .then(resources => {
            res.json(resources);
        })
        .catch(err => {
            res.status(500).json({ message: "Failed to get resources" });
        });
});

router.get("/tasks", (req, res) => {
    Projects.getTasks()
        .then(tasks => {
            res.json(tasks);
        })
        .catch(err => {
            res.status(500).json({ message: "Failed to get tasks" });
        });
});

router.post("/", (req, res) => {
    const projectData = req.body;

    Projects.addProjects(projectData)
        .then(created => {
            res.status(201).json({ created });
        })
        .catch(err => {
            res.status(500).json({ message: "Failed to create new project" });
        });
});

router.post("/resources", (req, res) => {
    const resourceData = req.body;

    Projects.addResources(resourceData)
        .then(created => {
            res.status(201).json({ created });
        })
        .catch(err => {
            res.status(500).json({ message: "Failed to create new resource" });
        });
});

router.post("/:id/tasks", (req, res) => {
    const taskData = req.body;
    const id = req.params.id;

    Projects.addTasks(id, taskData)
        .then(created => {
            res.status(201).json({ taskData });
        })
        .catch(err => {
            res.status(500).json({ message: "Failed to create new task" });
        });
});






module.exports = router;