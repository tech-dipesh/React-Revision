
import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./src/app";
import axios from "axios";
// let showHTML=<h2>Hello World</h2>;

let allList=[];


const createCard=((title, description, category, price)=>{
     allList.push(<div key={e}>
          <h1>{e.title}</h1>
          <p>{e.description}</p>
          <span>{e.category}</span>
          <h4>{e.price}</h4>
    </div>)  
})
axios.get("https://dummyjson.com/products")
.then(t=>{
  let convertToData=t.data.products;
  convertToData.map(e => {
    return createCard(
        e.title,
        e.description,
        e.category,
        e.price
    )
  })

})


let root=createRoot(document.querySelector("#root"))

// root.render(<App/>)
root.render(allList)