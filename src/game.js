import { GameOptions } from "../src/utils/gameOptions.js"
import { Random } from "../src/utils/maths.js"

let listAction = Object.values(GameOptions)

export class Game {
    constructor(score = 12) {
        this.score = score
        this.listAction = listAction
        this.userWin = ""
        this.Action_House = null

    }

    getAction(id) {
        return this.listAction.find((action) => action.id === id)
    }

    getstatus() {
        return this.userWin
    }

    getHouseAction() {
        return this.Action_House
    }

    StartGame(userAction) {
        let houseAction = Random(1, 3)

        let user = this.getAction(userAction)
        let house = this.getAction(houseAction)
        this.Action_House = house

        let adictionResult = user.id + house.id

        if (user.id === house.id) {
            this.score += 0
            this.userWin = "EMPATE"
            return this.userWin
        }
        if (user.id != house.id) {
            if (user.win === adictionResult) {
                this.score += 1
                this.userWin = "YOU WIN"

                return this.userWin
            } else {
                this.score -= 1
                this.userWin = "YOU LOSE"
                return this.userWin
            }
        }


    }

}