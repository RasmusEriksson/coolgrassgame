import GameObject from "./GameObject.js";
import Vector2 from "./Vector2.js";

export default class Entity extends GameObject {
    constructor(game,x,y,width,height) {
        super(x,y,width,height)

        this.game = game
        this.direction = new Vector2(0,0)
        this.direction = this.direction.get_direction()
        this.velocity = 0
    }

    draw(ctx) {
        ctx.fillRect(this.pos.x, this.pos.y, this.size.width, this.size.height)
    }

    update(delta) {
        this.pos = this.pos.add(this.direction.multiply(this.velocity * delta / 100))
    }
}