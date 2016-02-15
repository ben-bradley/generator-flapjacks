# <%= name %>

> Your app's tag line goes here =D

## Components

- Gulp
- Babel
- Hapi
- Browserify
- React
- React Router
- Material-UI


## Concepts


### "Back-end"

I'm going to think of "back-end" as referring to server-side code.  Once the code is sent to the browser it becomes "front-end".

#### Routes

Routes should be thought of as response orchestrators.  A route calls on as many `handlers` as are necessary to compose a response

#### Handlers

Handlers are called upon by routes to process and build responses.  A handler that needs data will call on a controller to CRUD the data.  Handlers perform the business logic of the application. __ALL DATA MUTATION HAPPENS HERE!!!__  I recommend that your handlers have as narrow a focus as possible so that you can reuse them to compose your responses.

#### Controllers

Controllers simply do CRUD.  By abstracting this function we are able to swap out databases and data structures with ease.  A controller must NOT mutate the data in any way.


### "Front-end"

This refers to any code executed in the browser.

Admittedly, my experience with front-end related code is limited so I've tried to make the back-end as modular as possible.  My goal is that you can drop your front-end code into the `public/` folder and have everything 'just work'.
