import axios from "axios";
import { createRoot } from "react-dom/client";
import "./app.css"
const root=createRoot(document.querySelector("#root"))


const cardSample=((k)=>{
return (
  <div id="head" key={k}>
    {console.log(k)}
      <h1>Title: Cricke</h1>
      <h3>Description: WorldWide</h3>
      <img src="https://cdn.britannica.com/63/211663-050-A674D74C/Jonny-Bairstow-batting-semifinal-match-England-Australia-2019.jpg" alt="Cricket Imaeg" />
    </div>
)
})



const eachContainer=((k, title, description, image)=>{
return (
  <div id="head" key={k}>
      <h1>Title: {title}</h1>
      <h3>Description: {description}</h3>
      <img src={image} alt={title} />
    </div>
)
})

  
  
  
  
  
const allContainer=[cardSample(1), cardSample(2), cardSample(3), cardSample(4), cardSample(5), cardSample(6), cardSample(7)]

// root.render(<div id="render">{allContainer}</div>)



// let allContainer;




axios.get("https://dummyjson.com/products")
.then(t=>{
  // const storeAllMap= t.data.products.map(i => {
  //   return eachContainer(i.id, i.title, i.description, i.thumbnail)
  // });
  // root.render(<div id="render">{storeAllMap}</div>)
  root.render(<div id="render">{t.data.products.map(i => {
  return eachContainer(i.id, i.title, i.description, i.thumbnail)
    })}
  </div>)
})
.catch(c=>{
  console.log(c);
})


