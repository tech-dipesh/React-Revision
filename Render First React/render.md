# Steps that i've done to render:
  - `npm init -y`
  - `npm i parcel`
  - `npm i react react-dom`: React for parse dom for  showing a output
  - remove `"main": "index.js"` code from package.json
  - file: `package.json`: `scripts`: `start: parcel index.html`
  - file `script.js`:  `if (module.hot) module.hot.accept();` For hot mod replacement
