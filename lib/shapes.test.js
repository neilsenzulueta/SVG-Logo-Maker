const { Triangle, Circle, Square } = require("./shapes.js");

describe("test", () => {
    it("should be a triangle with blue background", () => {
        const shape = new Triangle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');

    });
});

const shape = new Circle();
shape.setColor("green");
expect(shape.render()).toEqual('<circle cx="25" cy="75" r="20" fill="green" />');

const shape = new Square();
expect(shape.render()).toEqual('<rect x="10" y="10" width="30" height="30" fill="red"/>');