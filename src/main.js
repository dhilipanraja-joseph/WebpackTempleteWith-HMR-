window.onload = () => {
  let heading = document.createElement("h1");
  let text = document.createTextNode("This text is dynamically created and bundled by webPack");
  heading.appendChild(text);
  document.body.appendChild(heading);
  console.log("success in HotModuleReplacementPlugin");
};
