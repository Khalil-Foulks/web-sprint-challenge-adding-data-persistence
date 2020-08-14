
exports.seed = function(knex) {
      return knex('projects').insert([
        {project_name: 'history_report', description: 'write a report about WW2', completed: true}
      ]);
};
