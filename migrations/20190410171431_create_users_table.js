
exports.up =  async function(knex, Promise) {
    try {
        const tableExists = await knex.schema.hasTable('users');
        if (!tableExists) {
            return knex.schema.createTable('users', function (table) {
                table.increments();
                table.string('user_id').notNullable();
                table.string('first_name').notNullable();
                table.string('last_name').notNullable();
                table.string('email').notNullable();
                table.string('password').notNullable();
                table.timestamps();

                table.index('user_id');
                table.index('first_name');
                table.index('last_name');
                table.unique('email');
                table.unique('user_id');
             });
        } else {
            console.log('This table has already been created');
        }
      } catch (error) {
          console.log(error);
      }
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('users');
};
