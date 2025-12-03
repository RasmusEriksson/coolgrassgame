import GameObject from "./GameObject.js";
import Rectangle from "./Rectangle.js";

export default class Game {
    constructor(width, height) {
        this.width = width
        this.height = height

        this.gameObjects = [new Rectangle(width/2,height/2,50,20)]
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