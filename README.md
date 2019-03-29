# hero-pictures-module


run the following terminal commands to get started. 

npm install

npm run start

npm run dev:react


start heroes database, in terminal, 

mysql -u root
SHOW DATABASES heroes (to check if it created, if not then run)
CREATE DATABASE heroes

if database exists check for tables, in terminal

USE heroes;
SHOW tables;

Tables should be listings and pics if tables dont exist, exist mysql with control+d

run command in terminal to create tables

knex migrate:latest

To generate fake data, launch html file in seedmaker folder. The data will be loged in browser console. 

Put data into correct files, /seeds/listings.js and /seeds/pics.js

now seed tables with data, in terminal run,

knex seed:run

data should be populated and working, you can check with mysql navigation commands listed above. 




