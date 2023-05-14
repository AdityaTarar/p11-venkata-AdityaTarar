class Calculator {
  add(num1, num2) {
    return num1 + num2;
  }

  subtract(num1, num2) {
    return num1 - num2;
  }

  multiply(num1, num2) {
    return num1 * num2;
  }

  divide(num1, num2) {
    if (num2 === 0) {
      throw new Error("Division by zero");
    }
    return num1 / num2;
  }
}

class ScientificCalculator extends Calculator {
  square(num) {
    return num ** 2;
  }

  cube(num) {
    return num ** 3;
  }

  power(num1, num2) {
    return num1 ** num2;
  }
}

const scCalc = new ScientificCalculator();

const sum = Calculator.prototype.add.call(scCalc, 10, 5);
console.log(sum);

const diff = Calculator.prototype.subtract.apply(scCalc, [10, 5]);
console.log(diff);

const multiplyByTwo = Calculator.prototype.multiply.bind(scCalc, 2);
console.log(multiplyByTwo(5));

const powerOfThree = Calculator.prototype.power.bind(scCalc, undefined, 3);
console.log(powerOfThree(2));
