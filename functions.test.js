const functions = require("./functions.js");

describe('multiply function', () => {
  it('multiply', () => {
    //ARRANGE
    const num1 = 2
    const num2 = 2
    //ACT
    const multiply2 = functions.multiply(num1, num2)
    //ASSERT
    expect(multiply2).toBe(4)
  })
});


describe('isNull function', () => {
  it('Should validate if number is null', () => {
    //ARRANGE
    const nullVariable = null;
    //ACT
    const result = functions.isNull(nullVariable);
    //ASSERT
    expect(result).toBe(true)
  });

  it('Should validate if number is not null', () => {
    //ARRANGE
    const nullVariable = 2;
    //ACT
    const result = functions.isNull(nullVariable);
    //ASSERT
    expect(result).toBe(false)
  });
});

describe('addLastname function', () => {
  it('should be return Pepito Perez when I sent Perez', () => {
    //ARRANGE
    const lastname = "perez"
    //ACT
    const result = functions.addLastName(lastname);
    //ASSERT
    expect(result).toEqual( {firstname: "Pepito", lastname: "perez"} )
  });
})
