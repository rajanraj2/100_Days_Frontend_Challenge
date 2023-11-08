// Link to problem :
// https://codedamn.com/problem/huA8-XtsKuvReZb_b8TN5?challengeList=100-days-of-frontend

/**
 * @param {Function} fn
 * @return {Function}
 */
const curry = function (fn) {
	return function curried(...args) {
	  if (args.length >= fn.length) {
		return fn.apply(this, args);
	  } else {
		return function(...args2) {
		  return curried.apply(this, args.concat(args2));
		}
	  }
	};
  }
  
  export default curry;
  