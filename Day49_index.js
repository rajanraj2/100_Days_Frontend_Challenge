// Link to problem :
// https://codedamn.com/problem/-872M7nrF2Xyn8cSmcmWj?challengeList=100-days-of-frontend

export const randomInRange = (min, max) => {
	const randomFloat = Math.random();
  	const scaledRandom = randomFloat * (max - min);
	const result = Math.floor(scaledRandom) + min;
	return result;
  };