
exports.seed = function(knex) {
      return knex('resources').insert([
        {resource_name: 'book', description: 'safsafsadf'},
        {resource_name: 'laptop', description: 'it is a computer'},
        {resource_name: 'library_card', description: 'dfsafasfasf'},
      ]);
};
