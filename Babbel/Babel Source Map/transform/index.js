let HtmlContent = /*#__PURE__*/React.createElement("div", {
  style: {
    background: "#f0f7ff",
    padding: "20px",
    borderRadius: "10px",
    fontFamily: "Arial"
  }
}, /*#__PURE__*/React.createElement("h3", {
  style: {
    margin: "0 0 15px",
    color: "#0066cc"
  }
}, "Quick Contact"), /*#__PURE__*/React.createElement("form", {
  style: {
    display: "flex",
    flexDirection: "column",
    gap: "10px"
  }
}, /*#__PURE__*/React.createElement("input", {
  type: "text",
  placeholder: "Your Name",
  style: {
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px"
  }
}), /*#__PURE__*/React.createElement("input", {
  type: "email",
  placeholder: "Email Address",
  style: {
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px"
  }
}), /*#__PURE__*/React.createElement("button", {
  type: "submit",
  style: {
    backgroundColor: "#0066cc; color: white",
    border: "none",
    padding: "10px",
    borderRadius: "5px",
    cursor: "pointer"
  }
}, "Send Message")));
let createRoot = ReactDOM.createRoot(document.querySelector("div"));
console.log(createRoot);
createRoot.render(HtmlContent);
//# sourceMappingURL=index.js.map