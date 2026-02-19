# Babel Source Map:
  # Steps to setup the React jsx with the Babel Compile:
  - Start npm package with: `npm init -y`
  - Install react and react-dom: `npm i react-dom` & `npm i react`
  - install Babel: `npm install --save-dev @babel/core @babel/cli`
  - Setup Babel on Package Build: `    "build": "babel ./index.js -d transform"`: With index.js is our raw jsx while transform is folder where we want to convert
  - Add `.babelrc` File and add this code there: `{"presets": ["@babel/preset-react"]}` Of Babble transform of the jsx code
  - for making a automatic refresh of wheever we change something:     `"build": "babel index.js -d transform --watch"` with --watch can achieve it.



> On the babel as the code get's bigger, the transformed code, can't understand of where our code, for solving that we use teh source map.



# For making a source map where we can understand a tranform code there are two way to generate our own source map:
  1. Write `"build": "babel index.js -d transform --source-maps"` Generate a new index.js.map on the tranform folder
  2. on `index.js` it'll add a 1 comment at the last, `//# sourceMappingURL=index.js.map` for making a link with source map
  3. It'll move the entire code to index.js.map: sourceContent


Browser never send teh request to the index.js that we've written instead it's send a request to the lib folder and if we add source map it can request there
# but don't show the sourcemap request to the devtools
> If we delete a source map file the browser may send a warning error of source map not avaible 


# there's teh js source maps setting on teh devtool if we disable it can't send a source maps request, so we should enable it.


# but on the deployment we shouldn't send a source-maps to client as other may see our code.




 ## Second way of adding the source maps:
  # Adding a sourceMaps to the .babelrc file:
  `{"sourceMaps": true} `




  # The webpack automatically generate the webpack, Source Maps and also the Babel