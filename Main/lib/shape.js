class Shape {
    constructor(color) {
        this.color = color;
    }
    setColor(color) {
        this.color = color;
    }
}

class Circle extends Shape {
    render() {
        /*
        Return a string that represents a circle element, using literals to pass color.
        */
    }
}

/* 
Create a Triangle and Square class that extends the Shape Class
*/

module.exports = { Cirlce, Triangle, Square };