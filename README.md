# webpack-boilerplate

This is a minimal example of bundling Tangram with Webpack, but without Babel or React, to illustrate the process by which Webpack module bundling works with Tangram in an otherwise-vanilla JS environment.

To try this out, clone this repository to your local environment, then run:

```sh
cd webpack-tangram-boilerplate
npm install
webpack
```

This will create a JavaScript bundle called `bundle.js`.

Then run:

```sh
http-server
```

This will create a local web server so that you can observe the app in action. You can open it in your browser at `http://localhost:8080`.