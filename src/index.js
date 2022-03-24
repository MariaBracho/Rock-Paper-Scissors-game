import { Render } from "../src/render.js";
import { Game } from "../src/game.js"
import { GameOptions } from "../src/utils/gameOptions.js"

const render = new Render()
const game = new Game()

render.renderViewFirst()
render.rederRules()
render.renderGameOptions()
render.renderScoreNumber()
render.renderAction()

if (screen.width < 700) {
    render.hiddeOrShow("button_rules")

}
render.hiddeOrShow("button_close")



const ActionId = Object.values(GameOptions)

const GameAll = () => {
    ActionId.forEach(Action => {
        let action = document.getElementById(Action.id)

        action.addEventListener("click", () => {

            game.StartGame(Action.id)
            render.renderUserVsHouse(Action.url, Action.background, Action.id)
            render.renderHousePikedGray()
            setTimeout(function() {
                render.renderHousePiked(game.Action_House.url, game.Action_House.background, game.Action_House.id)
                if (game.userWin == "YOU WIN") {
                    document.getElementById(Action.id).style = `box-shadow: 1px 1px 35px 18px #7b7b7b;`
                }
                if (game.userWin == "YOU LOSE") {
                    document.getElementById(game.Action_House).style = `box-shadow: 1px 1px 35px 18px #7b7b7b;`

                }
            }, 1000)
            if (screen.width < 700) {
                setTimeout(() => {
                    render.renderPlayAgain(game.getstatus(), "PlayAgainContainer")
                    document.getElementById("playAgain").addEventListener("click", play)
                    document.getElementById("UserVsHouse").style.width = `100%`

                }, 2000);

            }
            if (screen.width > 700) {
                setTimeout(() => {
                    render.renderPlayAgain(game.getstatus(), "PlayAgainContainerDesktop")
                    document.getElementById("playAgain").addEventListener("click", play)
                    document.getElementById("UserVsHouse").style.width = `700px`
                    document.getElementById("gameOptions").style.display = `flex`





                }, 2000);
            }


            render.renderScoreNumber(game.score)





        })


    });
}

GameAll()
document.getElementById("button_rules").addEventListener("click", () => {
    document.getElementById("rules").style.display = `grid`
})

export function play() {
    render.renderAction()
    GameAll()
}