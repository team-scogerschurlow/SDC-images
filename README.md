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



Docker commands


docker images <shows all images>

docker ps -a <shows all containers on your machine>

docker run <creates new containter from image>

nginx || <name> <name of image to spin into container>

--name webserver <gives container a unique name to identify with, in this case webserver>

-p 80:80 <connect to port 80 on host to port 80 on container, should be open on container to allow outside interactions>

-d <runs containter in detached state, in the background>



docker run -d -p 80:80 --name webserver nginx

docker stop webserver <stops webserver from running or name of>

docker start <container-name> 

docker rm <container-name> <removes the cointainer, only works if container is shutdown>

docker rm -f webserver2 <forces the stoppage and removal of webserver2, with the use of -f tag>

docker run -d -p 80:80 --rm --name goodbye nginx <adding a --rm tag to a run command makes a container delete itself when its stopped>

docker rmi <image-name> <removes an image>

docker rm <container-name> <container-name> <container-name> <container-name> <removes a container>

docker build <builds an image from a docker file>

-t <stands for tag, what do you want to tag the image your are creating, in this case it is nodeserver>

  . <relative path to the docker file>

docker build -t nodeserver .

docker run -d -p 1000:3000 --name slytherin_rulez --rm nodeserver <creates a container title slyher_rulez from the above image

docker restart slytherin_rulez <containers are stateless, this restarts the app and loads the data>

>pwd <gives current path to folder you are in terimanl, use to find file patch for next command>



docker run -d -p 1000:8080 -v <pwd or pathname goes here>/:/src/app --name psychic_container colorserver

<this runs an updating instance of your container, all you have to do is save, --name is hte name of new container using colorserver image>

easier version of command 

docker run -d -p 2000:8080 -v $(pwd):/src/app --name psychic_container2 colorserver

docker logs psychic_container <shows log of what has happened>

Docker commands 

docker-compose up

enterinto mysql container, 

docker exec -it <name of container> /bin/bash     

-create heroes table, 

mysql -u root -p

<enter PW>

-then

create database heroes

-now in new terminal enter into app heroes container

docker exec -it <name of container> /bin/bash     

-global install knex

npm install -g knex 

-then create tables 

knex migrate:latest

-then seed data

knex seed:run


-then restart app container

docker restart <app container name>

-then vist localhost:3000/<listingid> in your browser. 

<!-- (window.location.pathname).match(/\d+/)[0] -->


















