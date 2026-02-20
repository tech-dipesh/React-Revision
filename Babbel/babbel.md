# with the help of the babel we can write the jsx code.

- For giving a html suggestin of h1 h2 during react jsx we've to turn on the emmet:
"emmet.includeLanguages": {
  "javascript": "javascriptreact"
}


# Babel can help us to convert our modern code to all supported js code.

# Babel Convert the jsx to the react element of .js file

 

 - on the ady cdn tool there's the two types of, one is minified code of shorter and another is development code.

 | Minified  | Development:
| ------------ | --------- |
| @babel/standalone/babel.min.js | @babel/standalone/babel.js"  



#### for using the babel, the script tag must link to the babel.



- Without the babel the browser can't understand our jsx code.


- for Linking the a babel by default, we've to make a type=babel, by default it's has: `type=text/javascript`
if we use any other js can't make a linkage like: `type=text/cantlink` 
for making a bable link:
`  <script src="babbel.js" type="text/babel"></script>`





# The script tag on defer, that it mean the, run a script file only after the fully html file is parsed.





### The Major scritp attribute meaning is: The full form of MIME is Multipurpose Internet Mail Extensions, which is a standard for classifying file types on the internet. Originally created to allow for more than just plain text in emails, MIME is now used in protocols like HTTP to help servers and browsers identify and handle different types of data correctly. 





> The each value has the object on the jsx. console.log(h3);



- The babel is first it request a our file and transform to older js.



- As soon as babel parse a our code, it generate a source map, which can help us to do the debugging,




# React doesn't show a undefined on the frontend page.



# Jsx: JavaScript XML


# During Babel Installation:
  - Afer the npm installation we've to give a script build, with: `babel "Source Js Code" -d "Transform To Folder"` , ex: `babel script.js -d transform-babel`
  
  >:warning:**Warning** : It'll show the error of teh jsx isn't currently enabled 
   - We've to create a new `.babelrc` file where stored a babel config file info.
   - We've to link with the libraray/index.js not the main index.js on the script, only link and the defer nothing much.
   
