// Base class for triangle, circle, and square.
class Shape {
    constructor() {
        this.color = "";
    }
    setColor(color) {
        this.color = color;
    }
}

// Triangle class inheriting shape properties.
class Triangle extends Shape {
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`
    }
}

// Circle class inheriting shape properties.
class Circle extends Shape {
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`
    }
}

// Square class inheriting shape properties.
class Square extends Shape {
    render() {
        return `<rect x="70" y="40" width="160" height="160" fill="${this.color}" />`
    }
}

// Exporting the classes
module.exports = { Triangle, Circle, Square };
