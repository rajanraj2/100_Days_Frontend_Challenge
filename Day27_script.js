
const inputText = document.getElementById("inputText");
const wordCount = document.getElementById("wordCount");

document.getElementById("countButton").addEventListener("click", countWords);

function countWords() {
  const text = inputText.value;
  const words = text.split(/\s+/);
  const nonEmptyWords = words.filter(word => word.trim() !== "");
  wordCount.textContent = nonEmptyWords.length;
}
countWords();
