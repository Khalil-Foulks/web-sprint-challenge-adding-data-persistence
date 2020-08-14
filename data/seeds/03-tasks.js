
exports.seed = function(knex) {
      return knex('tasks').insert([
        {description: 'read textbook', notes: 'a note would be here', completed: false, project_id: 1,},
      ]);
};
