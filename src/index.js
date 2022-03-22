import { Render } from "../src/render.js";

const render = new Render()

render.renderViewFirst()
render.rederRules()
render.renderGameOptions()
render.renderScoreNumber()

console.log("holaaaa")


document.getElementById("2").addEventListener("click", () => {
    console.log("soy una option!!!!")
})

document.getElementById("button_rules").addEventListener("click", () => {
    document.getElementById("rules").style.display = `grid`
    document.getElementById("gameOptions").style.display = `none`
})

document.getElementById("button_close").addEventListener("click", () => {
    document.getElementById("rules").style.display = `none`
    document.getElementById("gameOptions").style.display = `flex`
})