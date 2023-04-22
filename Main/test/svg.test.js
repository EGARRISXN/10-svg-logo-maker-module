const SVG = require('./svg.js');

test('should throw an error if text exceeds 3 characters', () => {
    const expectedError = new Error('text must not exceed 3 characters.');
    const svg = new SVG();
    expect(() => svg.setText('wooooooooooooo, #fff')).toThrow(expectedError);
});

test('should set text message and color', () => {
    const expectedSVG =
    `<svg version='1.1' width='300' height'200' xmlns='http://www.w3.org/2000/svg'><text x='150' y='125' font-size'60' text-anchor='middle' fill='#333'>SVG</text></svg>`;
    const svg = new SVG();
    svg.setText('SVG', '#333');
    expect(svg.render()).toEqual(expectedSvg);
});

test('should render a 300 x 200 svg element', () => {

});

test('should append text element', () => {

});

test('should include a shape', () => {

});