const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  password: 'docker',
  host: 'ec2-18-191-187-217.us-east-2.compute.amazonaws.com',
  database: 'postgres',
  port: 5432,
});

pool.on('err', () => {
    process.exit(-1);
});

const retrievePics = (req, res) => {
  const id = parseInt(req.params.id);
  console.log(req.params.id);
  pool.query(`SELECT * FROM images WHERE id = ${id}`, (error, data) => {
    if (error) {
      console.log(error + ' My error');
    };
    res.status(200).json(data);
  });
};

module.exports = {
  retrievePics
};

// ec2-18-191-187-217.us-east-2.compute.amazonaws.com