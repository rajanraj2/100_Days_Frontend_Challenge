// Link to problem :
// https://codedamn.com/problem/fxNDmdIApYfxx2G_7zSVx?challengeList=100-days-of-frontend

export const sortAscendingByDate = (array) => {
	if (array.length === 0) {
	  return [];
	}

	const compareByDate = (a, b) => new Date(a.date) - new Date(b.date);
	array.sort(compareByDate);
  
	return array;
  };