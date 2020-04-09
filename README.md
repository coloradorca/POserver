# Product Overview API

RESTful API to the Product Overview module of the UglyDogStore.  

Serves up API routes using a Node Express Server and a PostGres Database.

## Project Description

Created SQL script to populate PostGres DB with over 30 million records.

Used faker.js and Node.js to generate over 9 million additional records.  

Created SQL scripts using multiple table joins to query Postgres DB.

Postgres DB is indexed, and response times for each endpoint is under 50ms for up to 300 requests per second. (Tested using New Relic and Artillery).

Deployed smaller scale PostGres DB to AWS EC2 instance.

Deployed Express server to AWS EC2 instance which can query deployed DB on seperate AWS EC2 instance.

Express server can alternate between running DB queries on local machine and deployed DB on AWS EC2 instance.

## Note  

This repo is not currently set up to run in a different developer environment. (SSH keys for AWS EC2 and Data are not included)
