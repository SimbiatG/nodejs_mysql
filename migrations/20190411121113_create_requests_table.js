
exports.up =  async function(knex, Promise) {
    try {
        const tableExists = await knex.schema.hasTable('requests');
        if (!tableExists) {
            return knex.schema.createTable('requests', function (table) {
                table.increments();
                table.string('user_id').notNullable();
                table.string('organization_id').notNullable();
                table.string(' employee_id').notNullable();
                table.enum('request_type', ['holiday leave', 'sick leave', 'maternitiy leave', 'paternity leave']).notNullable();
                table.string('start_date').notNullable();
                table.string('end_date').notNullable();
                table.enum('status', ['approved', 'denied']).notNullable();
                table.timestamps();

                table.unique('organization_id');
                table.unique('employee_id');
               
             });
        } else {
            console.log('This table has already been created');
        }
      } catch (error) {
          console.log(error);
      }
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('requests');
};
