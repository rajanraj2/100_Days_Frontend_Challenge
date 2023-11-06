// Link to problem :
// https://codedamn.com/problem/V93sdMOxsOrkXgW1EgiKQ?challengeList=100-days-of-frontend

/**
 * Class representing a trinary number.
 */
export class Trinary {
	/**
	 * Create a number.
	 * @param {string} trinaryNumber
	 */
	constructor(trinaryNumber) {
	  this.trinaryNumber = trinaryNumber;
	}
  
	/**
	 * Get the decimal equivalent of the trinary number
	 * @return {number} decimalNumber
	 */
	toDecimal() {
	  if (!/^[0-2]+$/.test(this.trinaryNumber)) {
		// Check for any character other than 0, 1, or 2
		return 0;
	  }
  
	  let decimalNumber = 0;
	  for (let i = this.trinaryNumber.length - 1; i >= 0; i--) {
		const trinaryDigit = parseInt(this.trinaryNumber[i], 10);
		const positionValue = Math.pow(3, this.trinaryNumber.length - 1 - i);
		decimalNumber += trinaryDigit * positionValue;
	  }
  
	  return decimalNumber;
	}
  }
  
  // Sample Test Cases
  const firstNumber = new Trinary("102012");
  console.log(firstNumber.toDecimal()); // Output: 32091
  
  const secondNumber = new Trinary("1211112");
  console.log(secondNumber.toDecimal()); // Output: 0 (Invalid trinary digits)
  
  const thirdNumber = new Trinary("22000");
  console.log(thirdNumber.toDecimal()); // Output: 63
  