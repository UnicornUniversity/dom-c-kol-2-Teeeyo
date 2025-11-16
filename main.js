/**
 * The main function which calls the application. 
 * @param {string} inputNumber number that is being converted
 * @param {number} inputNumberSystem numerical system that the inputNumber is being converted from
 * @param {number} outputNumberSystem numerical system that the inputNumber is being converted into
 * @returns {string} containing number converted to output system
 */
export function main(inputNumber, inputNumberSystem, outputNumberSystem) {
  inputNumber = Number(inputNumber);
  let dtoOut = [];

  // input must be a nonnegative integer
  if (!Number.isInteger(inputNumber) || inputNumber < 0) {
      console.error("Invalid inputNumber");
      return; // undefined
  }

  if (inputNumber === 0) {
      dtoOut.push(inputNumber);
  }

  // computes the values of the individual bits for inputNumber starting with the rightmost bit
  while (inputNumber > 0) {
      let bit = inputNumber % 2; // least significant bit of current inputNumber value
      dtoOut.unshift(bit);
      inputNumber = Math.floor(inputNumber / 2);
  }

  dtoOut = dtoOut.join("");

  return dtoOut;
}

/**
 * Function which returns which number systems are permitted on input.
 * @returns {Array} array of numbers refering to permitted input systems
 */
export function permittedInputSystems() {
	return [10];
}

/**
 * Function which returns which number systems are permitted on output.
 * @returns {Array} array of numbers refering to permitted output systems
 */
export function permittedOutputSystems() {
	return [2];
}