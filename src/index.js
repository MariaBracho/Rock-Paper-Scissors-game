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


render.hiddeOrShow("button_rules")
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

            }, 1000)

            setTimeout(() => {
                render.renderPlayAgain(game.getstatus())
                document.getElementById("playAgain").addEventListener("click", play)

            }, 2000);

            render.renderScoreNumber(game.score)





        })


    });
}

GameAll()


export function play() {
    render.renderAction()
    GameAll()
}