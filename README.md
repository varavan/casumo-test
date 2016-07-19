# Casumo JS Test

This document is meant for providing an easy entry point for casumo JS test.

## Technologies

    + Documentation: `blueprint`, `drakov` (for creating a mock server), `npm` for easy initialize everything
    + Application: `angularjs 2`, `typescript`, `webpack` (for easy serving the document and parsing assets), `npm` 
    
node version: `v4.4.5`
    
## Considerations

The use case says `Display a scrollable list of all one million books`. I think this is out of the scope because a list 
1Mi elements printed raw on the DOM would make the app innaccesible for some devices due to the requirements to work
within this list (filter, sort .. etc ). The solution is to implement [infinite scrolling](https://www.npmjs.com/package/angular2-infinite-scroll)
which I think is overengineering this app.
 
So the solution is to provide a server which is able to perform this actions on a stable time ( improving end user experience)
As long as the test is for frontend Developer, I did not implemented any rocket science as backend but just wrote a small
blueprint document as API specifications ( so I am delivering also the contract which should follow the backend, easy to alignment between backend & frontend)
and mock the server straigh from this document. You can find further instructions on README located at `docs` folder
 
So as you said, I felt free to change the specifications, I did to deliver a better `ready to use` product.



## How to get started

In order to get started, you need to start `mock server` and then `run http server` to see the application

### Run mock server

+ go to docs
+ `npm install`
+ `grunt default`
+ `node_modules/api-mock/bin/api-mock dist/latest.dist.apib --port 3000`

you can also see the API contract reference on `docs/dist/latest.html` after runing `grunt install`


### Run http server

+ go to application
+ `npm install`
+ `npm start` 

This will start a web dev server on `http://localhost:8080/` . Remember to start first mock server, without changing domain or port because it is hardcoded on application.


## Troubleshooting

+ upagrade/downgrade node to v4.4.5 LTS
+ remove `node_modules`
+ `npm install`