import Entity from "./Entity.js";
import Vector2 from "./Vector2.js";

export default class Player extends Entity {
    constructor(game, x, y, width, height) {
        super(game, x, y, width, height)
        this.velocity = 5
    }

    draw(ctx) {
        ctx.fillstyle = "red"
        ctx.fillRect(this.pos.x, this.pos.y, this.size.width, this.size.height)
        super.draw(ctx)
    }

    

    update(delta) {
        console.log(this.pos)

        
        if (this.game.inputHandler.activeKeys.has('w')) {
            this.direction = this.direction.add(new Vector2(0,-1))
        }
        if (this.game.inputHandler.activeKeys.has("a")) {
            this.direction = this.direction.add(new Vector2(-1,0))
        }
        if (this.game.inputHandler.activeKeys.has("s")) {
            this.direction = this.direction.add(new Vector2(0,1))
        }
        if (this.game.inputHandler.activeKeys.has("d")) {
            this.direction = this.direction.add(new Vector2(1,0))
        }
        this.direction = this.direction.get_direction()

        
        super.update(delta)
    }
}