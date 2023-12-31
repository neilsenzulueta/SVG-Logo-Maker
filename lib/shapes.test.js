// Importing shape classes from shapes.js file.
const { Triangle, Circle, Square } = require("./shapes.js");

// Group of test for Triangle class.
describe("test", () => {
    it("should be a triangle with blue background", () => {
        const shape = new Triangle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');

    });
});

// Group of test for Circle class.
describe("test", () => {
    it("should be a circle with green background", () => {
        const shape = new Circle();
        shape.setColor("green");
        expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="green" />');
    
    });
});

// Group of test for Square class.
describe("test", () => {
    it("should be a square with red background", () => {
        const shape = new Square();
        shape.setColor("red");
        expect(shape.render()).toEqual('<rect x="70" y="40" width="160" height="160" fill="red" />');

    });
});


