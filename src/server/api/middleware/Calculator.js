export const calculateResult = (req, res, next) => {
  const {
        body: {
          value1,
    value2,
    operand
        }
      } = req;

  const num1 = convertStringToNumber(value1);
  const num2 = convertStringToNumber(value2);
  let newValue = '0';

  switch (operand) {
    case '+':
      newValue = num1 + num2;
      break;

    case '-':
      newValue = num1 - num2;
      break;

    case 'X':
      newValue = num1 * num2;
      break;

    case '/':
      newValue = num1 / num2;
      break;

    default:
      break;
  }

  res.json(newValue.toString());
};

const convertStringToNumber = (value) => {
  return value.indexOf('.') > -1 ? parseFloat(value) : parseInt(value);
}
