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

Terminal commands for branches/testing

CURRENT BRANCH: new-herophotosshouldbedisplayedinacollage

git checkout master (gets you aligned with master branch)
git fetch origin (updates your local file to master copy)
git reset --hard origin/master

To make a new branch 

git checkout -b new-feature (in terminal, feature being your user story)

or 

git checkout -b marys-feature master


Use these commands to commit to your current branch, 

git status
git add <some-file>
git commit

also, push up to master repo, 

git push -u origin new-feature (this will allow for requesting pulls, fellow teammates review of your code)

for more info 

(https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow)


  // "react": "^16.8.5",
    // "react-dom": "^16.8.5",

    transform: scale(0.7)






