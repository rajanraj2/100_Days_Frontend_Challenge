// Link to problem :
// https://codedamn.com/problem/R-YvxNORKBd0rKvJ6gJ9c?challengeList=100-days-of-frontend

/**
 * Returns an array of phone numbers in xxx xxx xxxx format
 * @param {string} input - A string of text with phone numbers
 * @returns {Array} An array of phoneNumbers
 */
function matchPhoneNumbers(input) {
	// Use a regular expression to find all phone numbers in the format 'xxx xxx xxxx'
	const phoneNumbers = input.match(/\b\d{3} \d{3} \d{4}\b/g);
	return phoneNumbers || [];
  }
  
  /**
   * Replaces a valid url with "URL_REPLACED"
   * @param {string} input - A string of text with URLs
   * @returns {string}
   */
  function replaceURLs(input) {
	// Use a regular expression to replace all URLs with "URL_REPLACED"
	return input.replace(/\b(?:https?|ftp):\/\/\S+\b/g, "URL_REPLACED");
  }
  
  /**
   * Returns a count of the number of words available in the given string
   * @param {string} input - A string of text
   * @returns {number}
   */
  function countWords(input) {
	// Use a regular expression to split the string into words and return the count
	const words = input.split(/\s+/);
	return words.length;
  }
  
  /**
   * Returns the original string with a single space between words
   * @param {string} input - A string of text with extra spaces
   * @returns {string} cleaned string without any extra spaces
   */
  function removeExtraSpaces(input) {
	// Use a regular expression to replace multiple spaces with a single space
	return input.replace(/\s+/g, " ").trim();
  }
  
  // Sample Test Cases
  console.log(
	matchPhoneNumbers(
	  "My old phone number was 123 456 7890 but now you can reach me at 987 654 3210."
	)
  );
  console.log(
	matchPhoneNumbers("The store number is 555 321 9876, please call us.")
  );
  
  console.log(
	replaceURLs(
	  "Find more info at https://example.com or contact us at http://help.example.com"
	)
  );
  console.log(
	replaceURLs(
	  "The website http://mysite.com has been moved to https://newsite.com"
	)
  );
  
  console.log(countWords("This string has five words."));
  console.log(countWords("Counting words is easy!"));
  
  console.log(removeExtraSpaces("This   string    has   extra spaces."));
  console.log(
	removeExtraSpaces(
	  "     Too many    spaces    at the beginning and end.     "
	)
  );
  