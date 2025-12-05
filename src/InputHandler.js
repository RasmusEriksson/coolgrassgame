export default class InputHandler {
    constructor(game) {
        this.game = game
        this.activeKeys = new Set()

        window.addEventListener("keydown", (event) => {
            console.log(event.key)
            this.activeKeys.add(event.key)
        })

        window.addEventListener("keyup", (event) => {
            this.activeKeys.delete(event.key)
        })
    }
}