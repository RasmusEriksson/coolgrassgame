

export default class Vector2 {
    constructor(x,y) {
        this.x = x
        this.y = y
    }

    get_length() {
        return Math.sqrt(Math.pow(this.x,2),Math.pow(this.y,2))
    }

    get_direction() {
        length = this.get_length()
        return new Vector2(this.x / length, this.y / length)
    }

    add(vector2) {
        return new Vector2(this.x + vector2.x,  this.y + vector2.y)
    }

    multiply(numb) {
        return new Vector2(this.x * numb, this.y * numb)
    }
}