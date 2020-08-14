
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {description: 'read textbook', notes: 'a note would be here', completed: false, project_id: 1,},
      ]);
    });
};
