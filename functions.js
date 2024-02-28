const functions = {
  multiply: (num1, num2) => num1 * num2,
  isNull: (num1) => num1 === null,
  checkTruthy: (value) => value === true,
  addLastName: (lastname) => {
    const user = {firstname: 'Pepito', lastname}
    return user;
  }
}

module.exports = functions;


