//Defining the shape class with a color function
class Shape {
    constructor(color) {
        this.color = color;
    }
    setColor(color) {
        this.color = color;
    }
}

//Circle class
class Circle extends Shape {
    render() {
        //Returning the circle element with color
        return `<circle cx='150' cy='115' r='80' fill='${this.color}'/>`;
    }
}

//Triangle class
class Triangle extends Shape {
    render() {
        //Returning the triangle element with color
        return `<polygon points='150, 18 244, 182 56, 182' fill='${this.color}'/>`;
    }
}

//Square class
class Square extends Shape {
    render() {
        //Returning the Square element with color
        return `<rect x='90' y='40' width='160' height='160' fill='${this.color}'/>`;
    }
};

//Exports the Shape classes
module.exports = { Circle, Triangle, Square };