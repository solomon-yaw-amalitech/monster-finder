"use strict";
import {monsters} from "./monsters.js";  //import api

for(let monsterDiv of monsters)
{
    showMonster(monsterDiv) ; 
             
}


//Function that shows monster
function showMonster(monsterDiv){
    const monster = document.createElement("div");
    monster.className = "monster";
    
    const monsterimage = document.createElement("img");
    monsterimage.alt =monsterDiv.name;
    
    monsterimage.src = `https://robohash.org/${monsterDiv.id}?set=set2"`;
    
    const monstername = document.createElement("p");
    monstername.className ="name";
    monstername.innerText =monsterDiv.name;
    
    
    const monsteremail = document.createElement("p");
    monsteremail.className = "email";
    monsteremail.innerText = monsterDiv.email;
    
    monster.append(monsterimage,monstername,monsteremail);

    const monstersDiv = document.querySelector(".monsters");
    monstersDiv.append(monster);
    
    
}

 
ShowError404Message(); 

//Error Message Function
function ShowError404Message(){

const monsterNotFoundDiv = document.createElement("div");
monsterNotFoundDiv.className ="p-5 not-found";
monsterNotFoundDiv.style.display ="none";

const errorSpan = document.createElement("span");
errorSpan.innerText ="404";

const errorMessage =  document.createElement("h1");
errorMessage.innerText = "🧟‍♂️ No Monster Found 🧟‍♂️";

monsterNotFoundDiv.append(errorSpan,errorMessage);

const monstersDiv = document.querySelector(".monsters");
monstersDiv.append(monsterNotFoundDiv);
}


// search monster event listener
 document.querySelector("#search-monster").addEventListener("input",function(event){
  const keyword = event.target.value.toLowerCase();

  const findMonster = document.querySelectorAll(".monster");
  
  let notFound = true;
  
  for(let monster of findMonster)
  {
   const name = monster.children[1].innerText.toLowerCase();
   const email = monster.children[2].innerText.toLowerCase();
   
   if(name.includes(keyword) || email.includes(keyword))
   {
      notFound = false;
     monster.style.display ="block";
     
   }

   else{
    
    monster.style.display ="none";
    
   }
   
  }

   if(notFound)
   {
    document.querySelector(".not-found").style.display= "block";
    
  }

   else{
    document.querySelector(".not-found").style.display= "none";
   }
  
  
 });
 

 
