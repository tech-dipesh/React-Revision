# Parcel is the build tool and the bundler tool that needs a zero configuration

# It merge multiple file and include and make a single file

> We can run the live server of the index.html, but it doesn't support any npm import library, and also can't do any configuration, which the solution is using a parcel.




# Parcel File Run:
- For running a html file with the import statement, we use the parcel where it make bundle and run the html file,: 
- on normal live server it's pure live server with having no bundler, with the parcal it've the own bundler with separate localhost.
- After Installing a parcel, now the localHost will have different server: 
- npx parcal index.html: npx is for the temporary one time, while npm for pernament.
- on that parcal, when we go to network tab it doens't send a index.js as we make a link, rather it make own encryped file
- When we open that encrypted file, it first bundle that file, and after that it 
- After installing the parcel, it make the own folder inside that to run a parcal server







# For bundler there are 3 main tools:
1. Parcel: Easy to learn, simple configuration
2. Webpack: Very slow, steep learning curve
3. Vite: Very Fast, that i used earlier





# Why Need the Parcel:
- For using after the react installation
- Now if we try to use import statemetn from the react, the brwoser say: `Failed to resolved module specified "react"`, mean browser can't understand the import export statement,
  - As we've server the all node_modules file but can't understand our browser, 
 - for fixing a above error, we use teh parcel


# Parcel On React:
1. First we download the parcel library with npm 
2. Just run: `npx parcel index.html` that's it 
3. During Render we've to import createRoot react-dom/client, 


Done.


# How Parcel Work:
1. first it bundle all the linkage file and the import export all library files
2. It'll create a 1 folder named: `dist` with that parcel serve the primary server as dist folder


# Useful Notes:
- Parcel Behind the scense also use the babel
- For changina a custom domain of the parcel can use: `parcel serve index.html -p 8000`
- The browser will always only have the access of teh `dist` folder
- Parcel Generate dist folder is our last browser folder, we can even serve that folder as our primary browser folder, which browser can understadn from our jsx code.
- we can only publish the `dist` folder without on the browser where it work same as index.html file.
- on every path that the homepage url will serve: like: `https://localhost:1234/afsdjadlf` can server  a homepage.
- on Sources a `_parcel_source_root` is just the illusion nothing much




# What Parcel Can Do:
- Can Start our html server file with npm libraries
- Hot Reloading: 
  - HMR: Hot Module Replacement: It'll make teh change on the browser without needed to reload a page,
   - Hot Reload command:  if (module.hot) {module.hot.accept();}
- Diagonostic: During the error, it'll show a error on where with teh explanation
- Suppor the tree shaking on js



# Node Modules is not for the browser, rather it's for teh server.  

