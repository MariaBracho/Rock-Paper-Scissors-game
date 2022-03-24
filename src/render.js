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
        <div class="RockPaperScissors" id="Actions"> 
         
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

    hiddeOrShow(id) {
        document.getElementById(`${id}`).addEventListener("click", () => {
            let nameId = id == "button_rules"
            document.getElementById("rules").style.display = nameId ? `grid` : `none`
            document.getElementById("gameOptions").style.display = nameId ? `none` : `flex`
        })
    }

    renderAction() {
        document.getElementById("Actions").innerHTML = `
        <div class="RockPaperScissors_Triangulo">
            
            <div class="background_icon background_paper " id="2">
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
               
          
        `
    }

    renderUserVsHouse(imgUser, backgroundUser, idUser) {
        document.getElementById("Actions").innerHTML = `
        <div class="UserVsHouse" id="UserVsHouse">
            <div class="userPicked">
         <div class="background_icon ${backgroundUser}" id="${idUser}">
                    <figure class="containerPaper" >
                    <img src="${imgUser}">
                    </figure>
            </div>
            <p>YOU PICKED</p>
    </div>
    <div id="PlayAgainContainerDesktop" class="PlayAgainContainerDesktop"></div>
 <div id="housePiked" class="housePiked">
            
    </div>

            </div>
            <div id="PlayAgainContainer"></div>
           
        
        `

    }
    renderHousePiked(imgHouse, backgroundhouse, idHouse) {
        document.getElementById("housePiked").innerHTML = `
        <div class="background_icon ${backgroundhouse}" id="${idHouse}">
                    <figure class="containerScissors" >
                    <img src="${imgHouse}">
                    </figure>
                   
            </div>
            <p>THE HOUSE PICKED</p>
        `
    }

    renderPlayAgain(win, id) {
        document.getElementById(id).innerHTML = `
           <div class="PlayAgain_container"> 
              <p>${win}</p>
             <button class="button_playAgain" id="playAgain">  PLAY AGAIN</button>
           </div>
        
        `
    }


    renderHousePikedGray() {
        document.getElementById("housePiked").innerHTML = `
        <div class=" backgroundGray">
                
            </div>
        
        `
    }


}