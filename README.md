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

## Use React components

All files in `pages` are considered as pages with routes, but nothing stops you
from creating other components outside this folder to make them reusable. So
for a navigation you can create a new `components` folder and add a
`Navigation.js` file containing a React component displaying the navigation.
And this component can make use of another component, e.g. `NavigationItem.js`,
to render the single items of the navigation.

## Client-side routing

Next.js also allows you to use client-side transition between routes. All you
have to do is to use the `Link` tag. Import it from `next/link` and use it like
this:

```javascript
<Link href="/about"><a>About</a></Link>
```

After doing this you will see that the transition between routes, e.g. when
clicking on a `NavigationItem`, will not trigger a page refresh anymore.

The page also doesn't have to load anything if the user accesses a page that
has already been loaded in the same session previously.

## Literature

* <https://github.com/zeit/next.js>
* <https://zeit.co/blog/next>
