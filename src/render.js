export class Render {
    constructor(root = document.getElementById("root")) {
        this.root = root
    }

    renderViewFirst() {
        this.root.innerHTML = `
            <div class="rulesContainer" id="rules"></div>
            <div class="gameOptionsContainer" id="gameOptions"></div>
            `
    }
    rederRules() {
        document.getElementById("rules").innerHTML = `
        <div class="rules">
        
        <p class="rules_title">RULES</p>
        <img class=rules_image src="../Assets/images/image-rules.svg"> 
        <div class="container_close">
        <img class="rules_close" id="button_close" src="../Assets/images/icon-close.svg"> 
    </div>
        </div>
       
       `
    }

    renderGameOptions() {
        document.getElementById("gameOptions").innerHTML = `
        <div class="gameOptions">
        <div class="gameOptions_score">
        <img src="../Assets/images/logo.svg" >
        <div class="scoreContainer" id="scoreNumber">
      
        </div>
        
        </div>
        <div class="RockPaperScissors"> 
         <div class="RockPaperScissors_Triangulo">
            
     <div class="background_icon background_paper" id="2">
             <figure class="containerPaper" >
             <img src="../Assets/images/icon-paper.svg">
             </figure>
     </div>

     <div class="background_icon background_scissors" id="3">
             <figure class="containerScissors" >
             <img src="../Assets/images/icon-scissors.svg">
             </figure>
     </div>

     <div class="background_icon background_rock" id="1">
             <figure class="containerRock" >
             <img src="../Assets/images/icon-rock.svg">
            </figure> 
     </div>   
       
        </div>
        
   
        </div>
        <div class="button_container">
        <button class="RockPaperScissors_button" id="button_rules">RULES</button>

        </div>
       
        </div>
        
        
        `
    }

    renderScoreNumber(scoreNumber = 12) {
        document.getElementById("scoreNumber").innerHTML = `
        <p class="scoreContainer_Title"> SCORE </p>
        <p class="scoreContainer_Number"> ${scoreNumber} </p>
    `

    }
}