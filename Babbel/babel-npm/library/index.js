console.log("File is connected");
let headValue = /*#__PURE__*/React.createElement("h2", null, "Head Content", console.log("hello world"));
let anotherHead = /*#__PURE__*/React.createElement("h4", null, "Top Head", "Can show this string", " ", "can do a js operation", " ", 132 - 23);
const root = ReactDOM.createRoot(document.querySelector("div"));

// console.log(headValue);
console.log(anotherHead);
{
  /* root.render(h3) */
}
root.render(anotherHead);