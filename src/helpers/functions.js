function invertText(text) {
  const newText = text.split('').reverse().join('');
  return newText;
}

function normalizeText(text) {
  return text.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
}

function numericText(text) {
  var semAcento = normalizeText(text.toUpperCase());
  const characters = semAcento.split('');

  const newText = characters.map(chr => {
    if (chr === 'O') chr = '0';
    if (chr === 'L') chr = '1';
    if (chr === 'E') chr = '3';
    if (chr === 'A') chr = '4';
    if (chr === 'S') chr = '5';
    if (chr === 'T') chr = '7';
    return chr;
  });

  return newText.join('');
}

function csvText(text) {
  const words = text.split(' ');
  const newText = words.map(word => `"${word}"`).join(';');
  return newText;
}

function slugText(text) {
  const words = normalizeText(text.toLowerCase()).split(' ');
  const newText = words.join('-');
  return newText;
}

function vowelsOnly(text, onlyVowels) {
  const characters = normalizeText(text).toLowerCase().split('');
  const newText = characters.map(chr => {
    if (onlyVowels === false) {
      if (!(chr === 'a' || chr === 'e' || chr === 'i' || chr === 'o' || chr === 'u' || chr === ' '))
        return chr;
    } else {
      if (chr === 'a' || chr === 'e' || chr === 'i' || chr === 'o' || chr === 'u' || chr === ' ')
        return chr;
    }
    return '';
  });
  return newText.join('');
}

function variableText(text) {
  const words = normalizeText(text.toLowerCase()).split(' ');
  const newText = words.map((word, index) => {
    if (index > 0) {
      return word.substr(0, 1).toUpperCase() + word.substr(1);
    }
    return word;
  });
  return newText.join('');
}

export { invertText, numericText, csvText, slugText, vowelsOnly, variableText };