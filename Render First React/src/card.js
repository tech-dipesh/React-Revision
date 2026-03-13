import axios from 'axios';
import React from 'react'
const listOfCards=[];


let allList=[];
axios.get("https://dummyjson.com/products")
.then(t=>{
  let convertToData=t.data.products;
  convertToData.forEach(e => {
    allList.push(<div key={e}>
          <h1>{e.title}</h1>
          <p>{e.description}</p>
          <span>{e.category}</span>
          <h4>{e.price}</h4>

          {/* <h1>{e.}</h1> */}
    </div>)  
  })
  // allList.push(<div key={}>

  // </div>)
})
.catch(c=>{
  console.log(c);
})


export const Card = () => {
  return (
    {allList}
  )
}
