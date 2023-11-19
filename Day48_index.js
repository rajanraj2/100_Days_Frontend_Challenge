// Link to problem :
// https://codedamn.com/problem/rJM6FHl3f8FXDRxOeTZwL?challengeList=100-days-of-frontend

export const removeWhitespaces = (string) => {
	// If the input string is empty, return it
	if (string.length === 0) {
	  return string;
	}
  
	// Remove leading and trailing whitespaces
	string = string.trim();
  
	// Replace all whitespaces (including \n and \t) with an empty string
	string = string.replace(/\s/g, '');
  
	return string;
  };
  
  // Example usage:
  console.log(removeWhitespaces('Hello,   World!')); // Output: 'Hello,World!'
  console.log(removeWhitespaces('  This is a sentence.\nIt contains some whitespace.  ')); // Output: 'Thisisasentence.Itcontainssomewhitespace.'
  console.log(removeWhitespaces('\t  \n\n')); // Output: ''
  