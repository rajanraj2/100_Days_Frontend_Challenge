// Link to problem :
// https://codedamn.com/problem/VVsokhsxRxwTPMQGPStD3?challengeList=100-days-of-frontend

/**
 * @param {Function[]} functions
 * @param {number} n
 * @return {Function}
 */
export async function promisePool(functions, n) {
	const result = [];
	let currentIndex = 0;
  
	async function executeNext() {
	  const currentFunctionIndex = currentIndex;
	  currentIndex++;
  
	  if (currentFunctionIndex < functions.length) {
		const currentFunction = functions[currentFunctionIndex];
		const startTime = Date.now();
  
		// Execute the current function
		await currentFunction();
  
		// Calculate the elapsed time
		const elapsedTime = Date.now() - startTime;
		result.push(elapsedTime);
  
		// Recursively execute the next function
		await executeNext();
	  }
	}
  
	// Start executing promises concurrently up to the pool limit
	const promises = Array.from({ length: Math.min(n, functions.length) }, () => executeNext());
  
	// Wait for all promises to resolve
	await Promise.all(promises);
  
	return [result, Math.max(...result)];
  }
  

/**
 * Example usage:
 * const sleep = (t) => new Promise(res => setTimeout(res, t));
 * promisePool([() => sleep(500), () => sleep(400)], 1)
 *   .then(console.log) // After 900ms
 */
