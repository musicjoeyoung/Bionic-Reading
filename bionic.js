// Select the elements that contain the text to be read
const textElements = document.querySelectorAll('p, li, h1, h2, h3, h4, h5, h6');

// Bold the first half of each word
textElements.forEach((element) => {
  const text = element.innerText;
  const words = text.split(' ');
  const boldedWords = words.map((word) => {
    const halfIndex = Math.ceil(word.length / 2);
    return `<strong>${word.slice(0, halfIndex)}</strong>${word.slice(halfIndex)}`;
  });
  element.innerHTML = boldedWords.join(' ');
});
