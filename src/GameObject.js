import Vector2 from "./Vector2.js"
export default class GameObject {
    constructor(x, y, width, height) {
        this.pos = new Vector2(x,y)
        this.size = new Vector2(width,height)
    }
    
    draw(ctx) {
        //Used by subclasses to draw out visuals
    }

    update(delta) {
        //Used by subclasses to update behavior each frame based on delta
    }
}