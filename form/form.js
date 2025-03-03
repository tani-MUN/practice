const club=document.getElementById("checkBtn");
const premier=document.getElementById("premier");
const liga=document.getElementById("liga");
const serie=document.getElementById("serie");
const bundes=document.getElementById("bundes");
const ligue1=document.getElementById("ligue1");
const j=document.getElementById("j");
const etc=document.getElementById("etc");
const clubName=document.getElementById("clubName");

club.addEventListener("click" , ()=>{
  let ligue=document.getElementById("ligue");
  
  if(ligue.value=="premier"){
    premier.style.display="inline";
  }
  else if(ligue.value=="liga"){
    liga.style.display="inline";
  }
  else if(ligue.value=="serie"){
    serie.style.display="inline";
  }
  else if(ligue.value=="bundes"){
    bundes.style.display="inline";
  }
  else if(ligue.value=="ligue1"){
    ligue1.style.display="inline";
  }
  else if(ligue.value="j"){
    j.style.display="inline";
  }
  else if(ligue.value="etc"){
    etc.style.display="inline";
  }
  club.style.display="none";
});

const reset=document.getElementById("reset");
reset.addEventListener("click" , ()=>{
  clubName.style.display="none";
club.style.display="inline-block";
});