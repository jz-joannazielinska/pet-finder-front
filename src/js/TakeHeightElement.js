const elem = document.querySelector("#img");
if(elem) {
  const rect = elem.getBoundingClientRect();
  console.log(`height: ${rect.height}`);
}
