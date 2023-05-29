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
