# Coding Challenge - Product List with Detail Page

This project was built to fetch product list and product details, as well as leave comments and rating for chosen products.
It was built using React framework, along with libraries like axios, node-sass, & react-router.

## Web App

This is the Web App of the Coding Challenge - Product List with Detail Page. It requests for Back End REST API to fetch product list & product details. It consumes 3 APIs, which can be referred below:

- [Get Products](https://dummyproducts-api.herokuapp.com/api/v1/products?apikey=5oIDTjlULgO8)
- [Search for Products](https://dummyproducts-api.herokuapp.com/api/v1/products/search?term={searchTerm}&apikey=5oIDTjlULgO8)
- [Get Product by Product Id](https://dummyproducts-api.herokuapp.com/api/v1/products/{productId}?apikey=5oIDTjlULgO8)

It is bootstrapped using [Create React App](https://github.com/facebook/create-react-app) & has some additional third-party library, such as:

- [Axios](https://github.com/axios/axios) - It is used for managing back end API calls. All API calls in this web app are done through Axios service.
- [React-Router](https://reactrouter.com/) - It is used to manage routing inside of the React app
- [Node-Sass](https://github.com/sass/node-sass) - It is used to compile .scss files to css files to be consumed for stylings.


### Installation

1. Install [NodeJS](https://nodejs.org/en/download/) & NPM (Node Package Manager).
2. Run `npm install` from this directory to install all the other dependencies.

### Running

1. Open terminal & change dir to this directory (`[DIR]/`)
2. Run `npm start` to run the Web app. It will run on `http://localhost:3000/`.

## Versioning

1.0.0

## Authors

- **Dodi Cendana** - _Initial work_ - Coding Challenge - Product List with Detail Page