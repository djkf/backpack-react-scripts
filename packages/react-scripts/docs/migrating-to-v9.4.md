# Migrating from v9.2 to v9.4

Inside any created `backpack-react-scripts` project that has not been ejected, run:

```
npm install --save-dev "@skyscanner/backpack-react-scripts@^9.4.0"
```

## Breaking Changes

## New Features

### `start-ssr`

BRS supports 2 rendering modes:

- CSR - Client Side Rendering
- SSR - Server Side Rendering

We refer to apps that use both of these modes as "Universal".

To use these 2 rendering modes you add code to 2 entrypoints:

- Web entrypoint - `src/index.js` - code here is compiled for CSR
- SSR entrypoint - `src/ssr.js` - code here is compiled for SSR

In <v9.4 BRS offered 2 scripts for building the code in these entrypoints:

- `start` - Used for development; build the web entrypoint in development mode, watch the filesystem
  for changes and serve bundles over HTTP with "hot reload"
- `build` - Used for production; build the web and SSR entrypoints in production mode and write bundles
  to the `build/` directory

Note that the only way to build the SSR entrypoint was to use the `build` script to generate a production build.

v9.4 offers 3 scripts:

- `start` - Used for development of *CSR-only apps*; build the web entrypoint  in development mode,
  watch the filesystem for changes and serve bundles over HTTP with "hot reload"
- `start-ssr` - Used for development of *Universal apps*; build the web and SSR entrypoints in development mode, watch
  the filesystem for changes, serve web bundles over HTTP with "hot reload", write SSR builds to the `build/` directory
- `build` - Used for production; build the web and SSR entrypoints in production mode and write bundles
  to the `build/` directory
  
So what do I need to do?

**I don't use SSR** - You don't need to do anything - keep using the `start` script as you are now.

**I use SSR** - Replace references to `react-scripts start` script with `react-scripts start-ssr`.

### Loadable Components

This version introduces support for [Loadable Components](https://loadable-components.com/) which provides powerful Code
Splitting features for React. Most importantly for Skyscanner it adds support for Code Splitting + SSR. The React docs
contain [a nice intro to Code Splitting](https://reactjs.org/docs/code-splitting.html), and cover why we need Loadable
over `React.lazy`.

Loadable support is an opt-in feature. **TODO: How to opt in?**

#### Loadable + SSR

The easiest way to set up SSR Code Splitting in your microsite is to use
the [Skyscanner Local Components](https://github.skyscannertools.net/vulcan/skyscanner-local-components/) project.




