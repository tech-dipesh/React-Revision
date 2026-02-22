if (module.hot) {
  module.hot.accept();
}



import {createRoot} from "react-dom/client"

console.log(createRoot);

import { objectList } from "./list-item.js";


let createH1=<p className="color: red">This is for the testing a can it connect this h1 to the server</p>



let root=createRoot(document.querySelector("h1"))



root.render(createH1)



console.log(objectList);
console.log("Testin practice!!!");
console.log("wow can we say something how good is this.");