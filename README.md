# lps.js Demo Web App (Front-end)

This repository holds the frontend web app for the [lps.js](https://github.com/mauris/lps.js) demonstration website, made using [Angular framework](https://angular.io/) and bundled with Webpack. The server-side repository of the web app can be found at https://github.com/mauris/lps-demo-web-api

### Set up

After cloning the repository, you need to install the dependencies described in `package.json` by running the command:

    $ npm i
    
Whenever `package.json` gets modified, you should run `npm i` to install new dependencies or update existing ones. 

### Configuring the Server Environment

The following environment variables are supported. You can also use `.env` file to configure the variables specific to this app.

- `PORT`: Sets the server port number
- `NODE_ENV`: Sets the environment under which the app is executing.

### Running Web App

To run the web app, run the command:

    $ npm start
    
By default, the web server will run on port `8080`. Hence when you visit http://localhost:3000/, you should see the web app responding.

If you're in development environment and would like the app to restart whenever you make changes (the changes to the app will not be reflected unless the app is restarted), you can run the following command instead:

    $ npm run dev
    
To only build the web app without running it, run the command:

    $ npm run build

    
### Code Linting

To run code linting, run the command:

    $ npm run lint
    
Code linting tool we're using is tslint as most code are written in TypeScript.

# License

The lps.js demo web app is open source and licensed under the BSD 3-Clause. The implementation depends on the LPS runtime [lps.js](https://github.com/mauris/lps.js). lps.js was implemented as part of Sam Yong's MSc Computer Science Individual Project and thesis at Imperial College London in 2018.
