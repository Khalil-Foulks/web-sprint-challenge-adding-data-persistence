
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {resource_name: 'book', description: 'safsafsadf'},
        {resource_name: 'laptop', description: 'it is a computer'},
        {resource_name: 'library_card', description: 'dfsafasfasf'},
      ]);
    });
};
