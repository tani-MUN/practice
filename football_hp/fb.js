const header=document.getElementById("fixed");

window.addEventListener("scroll" , ()=>{
  const scrollvalue=document.scrollingElement.scrollTop;
  if(scrollvalue=>300) {
    header.style.position="fixed";
  }
});