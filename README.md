## Rick and Morty Catalog

This is a project that uses the [Rick and Morty API](https://rickandmortyapi.com) to search and display characters of the show based on their names.
<br></br>
### How to run the project

You will need to have `node >= 14` installed on your machine, use your preferred node version management such as `n` or `nvm`. Also, it is necessary to have a node package manager like `npm` or `yarn`, pick the one that you used to work.

After install everything on your environment, those ones are the commands that you need to know:
<br></br>
#### Client 
`localhost:3000`

`$ yarn dev` 
To run the application in development mode

`$ yarn build` 
Builds the application to production usage

`$ yarn start` 
Starts a production server

`$ yarn test` 
To run all tests

`$ yarn test:watch` 
To run tests in watch mode
<br></br>
The application is also available in production environment: https://rick-and-morty.dudaschar.vercel.app
<br></br>
### The project

To develop this application I have chosen Next.JS to deal with the routes and the SSR of my pages. I decided to make the requests to build the page on the server-side, then just made requests on the client when necessary. For example, load more results or clean up the filters. This way, my page will be completely available and interactive first.

Along with Next.JS, I am using Styled Components to deal with styling, Jest, and React Testing Library to testing React components.

