import GameObject from "./GameObject.js";
import Vector2 from "./Vector2.js";

export default class Rectangle extends GameObject {
    constructor(x,y,width,height) {
        super(x,y,width,height)

        this.direction = new Vector2(1,1)
        this.direction = this.direction.get_direction()
        this.velocity = 1
    }

    draw(ctx) {
        ctx.fillRect(this.pos.x, this.pos.y, this.width, this.height)
    }

    update(delta) {
        this.pos = this.pos.add(this.direction.multiply(this.velocity * delta / 100))
    }
}