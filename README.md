# Next.js workshop

## What is Next.js

Next.js is a minimalistic framework for server-rendered React applications.

## Setup

Install all the dependencies using [Yarn](https://yarnpkg.com/).

```
$ yarn
```

Run the Next.js server with the dev command:

```
$ yarn run dev
```

The website is now running on <http://localhost:3000>, including automatic
transpilation and hot code reloading.

## Use the filesystem

The `pages` folder contains all pages. Pages are represented as ES6 modules
returning [React](https://facebook.github.io/react/) components. The path of
the file within the `pages` folder maps directly to the route. So if you want
to have an "about" page on `/about` simply create `/pages/about.js` returning
another React component.

## Literature

* <https://github.com/zeit/next.js>
* <https://zeit.co/blog/next>
