
let HtmlContent=(
    <div style={{
      background: "#f0f7ff",
       padding: "20px",
        borderRadius: "10px",
        fontFamily: "Arial"
    }}>
  <h3 style={{
    margin: "0 0 15px",
     color: "#0066cc",
  }}>Quick Contact</h3>
    <form style={{
  display: "flex",
  flexDirection: "column",
   gap: "10px"
  }}
   >
    <input type="text" placeholder="Your Name" style={{
      padding: "10px",
       border: "1px solid #ccc",
        borderRadius: "5px"
      }}/>
    <input type="email" placeholder="Email Address" style={{
      padding: "10px",
       border: "1px solid #ccc",
        borderRadius: "5px"
      }}/>
    <button type="submit" style={{
      backgroundColor: "#0066cc; color: white",
       border: "none",
        padding: "10px",
         borderRadius: "5px",
          cursor: "pointer"}}>
      Send Message
    </button>
  </form>
  </div>
)


let createRoot=ReactDOM.createRoot(document.querySelector("div"));
console.log(createRoot);
createRoot.render(HtmlContent)
