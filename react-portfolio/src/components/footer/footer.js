import React from "react";
 import './footer.css';
 import Pdf from './Resume.pdf';


function footer() {
  return (


    <div class="contact">
       <hr></hr>

        <h2>Contact me!</h2>

        <p>
            <ul>
            <li>
                <a href= "" >maddisontaitano@gmail.com</a>
            </li> 
            <li>
                <a href="">704-778-0650</a>
            </li>
           <li>
            <a href="https://www.instagram.com/maddison.taitano/?hl=en">Instagram</a>
            </li>
            <li>
            <a href="https://www.linkedin.com/in/maddison-taitano-3060261a4/">LinkedIn</a>
            </li>
            <li>
                <a href="https://github.com/Maddisontaitano"> Github</a>
            </li>
            <li><a href = {Pdf} target ="blank">Download Resume</a></li>
            
              
            </ul>
        </p>
        
</div>
  );
}


export default footer;