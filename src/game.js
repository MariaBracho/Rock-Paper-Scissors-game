import { GameOptions } from "../src/utils/gameOptions.js"
import { Random } from "../src/utils/maths.js"

let listAction = Object.values(GameOptions)

export class Game {
    constructor(score = 12) {
        this.score = score
        this.listAction = listAction
        this.userWin = null
        this.Action_House = null

    }
    userWinScore() {
        let win = this.userWin ? this.score += 1 : this.score -= 1
        return win
    }

    getAction(id) {
        return this.listAction.find((action) => action.id === id)
    }

    getstatus() {
        console.log(this.userWin)
    }

    getHouseAction() {
        return this.Action_House
    }

    StartGame(userAction) {
        let houseAction = Random(1, 3)

        let user = this.getAction(userAction)
        let house = this.getAction(houseAction)
        this.Action_House = house


        console.log(house.name, user.name)
        console.log(house.id)

        let adictionResult = user.id + house.id

        this.userWin = user.win === adictionResult
        console.log(this.userWinScore(), "score")
        console.log(this.userWin)

    }

}