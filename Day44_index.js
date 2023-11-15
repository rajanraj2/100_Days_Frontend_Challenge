// Link to problem :
// https://codedamn.com/problem/WFiSwwVnksa6nWP4y0KWZ?challengeList=100-days-of-frontend

export const mostCommon = (words) => {
    // Check if the input array is empty
    if (words.length === 0) {
        return null;
    }

    // Create a map to store the frequency of each word
    const frequencyMap = new Map();

    // Iterate through the array and count the occurrences of each word
    for (const word of words) {
        // Using the map to store word frequencies
        frequencyMap.set(word, (frequencyMap.get(word) || 0) + 1);
    }

    // Initialize variables to keep track of the most common word and its frequency
    let mostCommonWord = words[0];
    let maxFrequency = frequencyMap.get(words[0]) || 0;

    // Iterate through the map to find the most common word
    frequencyMap.forEach((frequency, word) => {
        if (frequency > maxFrequency || (frequency === maxFrequency && words.indexOf(word) < words.indexOf(mostCommonWord))) {
            mostCommonWord = word;
            maxFrequency = frequency;
        }
    });

    return mostCommonWord;
};
