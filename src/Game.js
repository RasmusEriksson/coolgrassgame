import GameObject from "./GameObject.js";
import Entity from "./Entity.js";
import InputHandler from "./InputHandler.js";
import Player from "./Player.js";


export default class Game {
    constructor(width, height) {
        this.width = width
        this.height = height

        this.inputHandler = new InputHandler(this)

        this.gameObjects = [new Player(this, width/2,height/2,25,25)]
    }

    update(delta) {
        this.gameObjects.forEach(gameObject => {
            gameObject.update(delta)
        });

    }

    draw(ctx) {
        this.gameObjects.forEach(gameObject => {
            gameObject.draw(ctx)
        });
    }
}