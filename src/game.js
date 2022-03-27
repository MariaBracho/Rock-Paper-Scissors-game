import { GameOptions } from "../src/utils/gameOptions.js"
import { Random } from "../src/utils/maths.js"

const defaultGameConfig = {
    score: 12,
    listOfActions: Object.values(GameOptions),
}

export class Game {12
    constructor(config = defaultGameConfig) {
        this.score = config.score
        this.listAction = config.listOfActions
        this.userWin = ""
        this.Action_House = null
    }

    getAction(id) {
        return this.listAction.find((action) => action.id === id)
    }

    getstatus = () => this.userWin

    getHouseAction = () => this.Action_House

    executeOptionSelectedByUser(userAction) {
        const houseAction = Random(1, 3)
        const user = this.getAction(userAction)
        const house = this.getAction(houseAction)
        this.Action_House = house

        const adictionResult = user.id + house.id

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