# Casumo Front End Javascript Coding Challenge

This project is aim to fulfill all the requirements from Casumo Front End Developer test. 

I forked  [this repository](https://github.com/preboot/angular2-webpack) in order to have some scafolding. There are 
some tools out of the scope, such as file `.editconfig` but I think they are worthy for a bigger project so I want 
to show what is important for me 

## Some insights

+ angular 2 
+ 1 service to feed the information from HTTP api
+ unit tests with `Jasmine`, they are quite basic but enought to show that tests are important for me ;)
+ integration test with `Karma`

Probably home component can be splited within several components. But I guess is not worth enought do iterations on a test :) 


## Run http server

+ go to application
+ `npm install`
+ `npm start` 

This will start a web dev server on `http://localhost:8080/` . Remember to start first mock server, without changing domain or port because it is hardcoded on application.

## Run test suite

+ `npm install`
+ `npm test`


## Troubleshooting

+ upagrade/downgrade node to v4.4.5 LTS
+ remove `node_modules`
+ `npm install`