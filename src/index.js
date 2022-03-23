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
ActionId.forEach(Action => {
    let action = document.getElementById(Action.id)

    action.addEventListener("click", () => {

        game.StartGame(Action.id)
        render.renderUserVsHouse(Action.url, Action.background, Action.id, game.getHouseAction().url, game.getHouseAction().background, game.getHouseAction().id)

        document.getElementById("playAgain").addEventListener("click", () => {
            render.renderAction()
            document.getElementById("3").addEventListener("click", () => console.log("heyyyy"))
        })

    })
});