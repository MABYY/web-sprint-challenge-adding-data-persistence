exports.seed = function(knex,Promise) {
    // Deletes ALL existing entries
    return knex('resources').truncate()
      .then(function () {
        // Inserts seed entries
        return knex('resources').insert([
            {"resource_name":"foo","resource_description":null}
        ]);
      });
  };
  