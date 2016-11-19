require('./style.css'); // Imports style.css file from the src directory.

window.onload = () => {
  let heading = document.createElement("h1");
  let text = document.createTextNode("This text is created in JavaScript and bundled by webPack. ( Change this text from main.js file to check hmr)");
  heading.appendChild(text);
  document.body.appendChild(heading);
  console.log("success");
};
