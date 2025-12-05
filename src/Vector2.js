

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
        if (length == 0) {
            return new Vector2(0,0)
        }
        else {
            return new Vector2(this.x / length, this.y / length)
        } 
    }

    add(vector2) {
        return new Vector2(this.x + vector2.x,  this.y + vector2.y)
    }

    multiply(numb,vector2 = new Vector2(1,1)) {
        return new Vector2(this.x * numb * vector2.x, this.y * numb * vector2.y)
    }
}