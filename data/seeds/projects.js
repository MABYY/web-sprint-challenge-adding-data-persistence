exports.seed = function(knex,Promise) {
    // Deletes ALL existing entries
    return knex('projects').truncate()
      .then(function () {
        // Inserts seed entries
        return knex('projects').insert([
            {"project_name":"bar",
            "project_description":null,
            "project_completed":0}
        ]);
      });
  };
  