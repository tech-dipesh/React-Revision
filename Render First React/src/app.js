import axios from "axios";
import "./style.css"
import { Card } from "./card";
let allElements=[];
axios.get("https://dummyjson.com/ip")
.then((d)=>{
  allElements.push(<h1 key={d.data}>{d.data.ip}</h1>)
})
.catch((e)=>{
  console.log(e);
})

let randomColor=["blue", "green", "yellow", "gray", "red", "purple", "orange"];
for(let i=1;i<100;i++){
  let getRandomValue=Math.floor(Math.random()*randomColor.length);
  allElements.push(<h1 key={i} style={{color:randomColor[getRandomValue]}}>{i} Hello World </h1>)
}


// let ipDetails=(
//   <div>
//     {dataFetch}
//   </div>
// )

const App=()=>(
  <div>
    <Card/>
  </div>
);


export  {App};