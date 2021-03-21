import React from "react";
import "./cards.css";


// importing pictures
import code from "./images/code.jpg";
import circuitboard from "./images/circuitboard.jpg";
import fence from "./images/fence.jpg";
import keyboard from "./images/keyboard.jpg";
import codeTwo from "./images/code2.jpg";
import tree from "./images/tree.jpg";
import codeThree from "./images/code3.jpg";
import city from "./images/city.jpg";

// function for cards

function cards() {
  return (
<div class="assignments">

    <h2 class=" titleWork">
        work!
    </h2>

    <div class="display">
    <div class="row">
        < div class="card img item">
            <p class="label">
                Code Refractor assignemnt 
            </p>
            <a href={"https://github.com/Maddisontaitano/project"}>
            <img src={code} alt=""/>
            </a>
        </div>
    
        <div class="card img item">
            <p class="label">
                Furry Friend Finder (Group Project1)
            </p>
            <a href={"https://github.com/Asieger75/Furry-Friend-Finder"}>
            <img src={circuitboard} alt=""/>
            </a>

        </div>

        <div class="card img item">
            <p class="label">
                Student Bio assignemnt
            </p>
            <a href={"https://github.com/Maddisontaitano/Project2"}>
            <img src={fence} alt=""/>
            </a>
        </div>

        <div class="card img item">
            <p class="label">
                Password Genergator Assignment
            </p>
            <a href={"https://github.com/Maddisontaitano/Project2"}>
            <img src={keyboard} alt=""/>
            </a>

        </div>

        <div class="card img item">
            <p class="label">
                Beerphoria (Group Project2)
            </p>
            <a href={"https://github.com/sjohn214/BeerPhoria"}>
                <img src={codeTwo} alt=""/>
            </a>
         </div>

         <div class="card img item">
            <p class="label">
                Work Day Scheduler 
            </p>
            <a href={"https://github.com/Maddisontaitano/workScheduler"}>
            <img src={tree} alt=""/>
            </a>
         </div>

         <div class="card img item">
            <p class="label">
                ReadMe Generater
            </p>
            <a href={"https://github.com/Maddisontaitano/ReadmeGenerater"}>
            <img src={codeThree} alt=""/>
            </a>
         </div>

         <div class="card img item">
            <p class="label">
                Student Bio assignemnt
            </p>
            <a href={"https://github.com/Maddisontaitano/Project2"}>
                <img src={city} alt=""/>
                </a>
         </div>




    </div>
    </div>
</div>


);
}
export default cards;