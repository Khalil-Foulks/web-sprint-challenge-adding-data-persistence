const db = require("../data/db-config")

module.exports = {
    getResources,
    getProjects,
    getTasks,
    addResources,
    addProjects,
    addTasks
}

function getResources() {
    return db("resources");
}

function getResourcesByID(id) {
    return db("resources").where({ id }).first();
}

function getProjects() {
    return db("projects");
}

function getProjectsByID(id) {
    return db("projects").where({ id }).first();
}

function getTasks() {
    return db("tasks as a")
        .join("projects as b", "a.project_id", "=", "b.id")
        .select("a.*", "b.project_name", "b.description as project_description")
}

function addResources(resource) {
    return db("resources")
        .insert(resource)
        .returning("id")
        .then(ids => {
            const id = ids[0]
            return getResourcesByID(id)
        })
}

function addProjects(project) {
    return db("projects")
    .insert(project)
    .returning("id")
    .then(ids => {
        const id = ids[0]
        return getProjectsByID(id)
    })
}

function addTasks(project_id, body) {
    return db("tasks as a")
        .join("projects as b", "a.project_id", "=", "b.id")
        .insert(body)
        .where("a.project_id", project_id)
}