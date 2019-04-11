const config = require('./knexfile');
const knex = require('knex')(config.development);


knex.raw('SELECT VERSION()')
    .then(version => {
        console.log('DB Version', version);
    }, error => console.log);