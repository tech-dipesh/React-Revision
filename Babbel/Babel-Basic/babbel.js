// const h3=<h3>This is the Babel Js From the js</h3>
// let divContent = (
//   <div>
//     <label htmlFor="input-content">First Name</label>
//     <input type="text" placeholder="first Name" />
//     <div style={
//       "height: 200px; position: relative; color: red;"
//     }>
//       Hello friends
//     </div>
//   </div>
// );

let headValue=<h2>Head Content{console.log("hello world")}</h2>
let anotherHead=<h4>Top Head{"Can show this string"} {"can do a js operation"} {132-23}</h4>

const root = ReactDOM.createRoot(document.querySelector("div"));

// console.log(headValue);
console.log(anotherHead);
{
  /* root.render(h3) */
}

root.render(anotherHead);
