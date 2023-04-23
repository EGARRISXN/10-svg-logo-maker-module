//Importing these classes from the shapes folder
const { Circle, Triangle, Square } = require('../lib/shape.js');

//Testing to see a circle with a blue background
describe('Circle test', () => {
    test('Circle test with a blue color background', () => {
        const shape = new Circle();
        shape.setColor('blue');
        expect(shape.render()).toEqual(
            `<circle cx='150' cy='115' r='80' fill='blue'/>`
        );
    });
});

//Testing to see a triangle with a green background
describe('Triangle test', () => {
    test('Triangle test with a green color background', () => {
        const shape = new Circle();
        shape.setColor('green');
        expect(shape.render()).toEqual(
            `<polygon points='150, 18 244, 182 56, 182' fill='green'/>`
        );
    });
});

//Testing to see a square with a red background
describe('Square test', () => {
    test('Square test with a red color background', () => {
        const shape = new Circle();
        shape.setColor('red');
        expect(shape.render()).toEqual(
            `<rect x='73' y='40' width='160' height='160' fill='red'/>`
        );
    });
});