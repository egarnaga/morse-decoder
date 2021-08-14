const MORSE_TABLE = {
  '.-':     'a',
  '-...':   'b',
  '-.-.':   'c',
  '-..':    'd',
  '.':      'e',
  '..-.':   'f',
  '--.':    'g',
  '....':   'h',
  '..':     'i',
  '.---':   'j',
  '-.-':    'k',
  '.-..':   'l',
  '--':     'm',
  '-.':     'n',
  '---':    'o',
  '.--.':   'p',
  '--.-':   'q',
  '.-.':    'r',
  '...':    's',
  '-':      't',
  '..-':    'u',
  '...-':   'v',
  '.--':    'w',
  '-..-':   'x',
  '-.--':   'y',
  '--..':   'z',
  '.----':  '1',
  '..---':  '2',
  '...--':  '3',
  '....-':  '4',
  '.....':  '5',
  '-....':  '6',
  '--...':  '7',
  '---..':  '8',
  '----.':  '9',
  '-----':  '0',
};

function decode(expr) {

  // Разбить строку на необработанный массив слов
  let getRawArrayOfWords = (str) => {
    let result = str.split('**********');
    return result;
  };

  // Получить из строки необработанный массив букв/символов/чисел
  let getRawArrayOfLetters = (str) => {
    let result = [];

    for (let i = 0, j = 10; i < str.length; i = i + 10, j = j + 10) {
      let letter = str.slice(i, j);
      result.push(letter);
    }

    return result;
  };

  // Получить из необработанной строки букву
  let getLetterFromRawString = (str) => {
    let isZero = true;
    let index = 0;

    let result = '';
    for (let i = 0; isZero && i < str.length; i++) {
      if (str[i] != '0') {
        isZero = false;
        index = i;
      }
    }

    result = str.slice(index);
    result = result.replace(/10/g, '.').replace(/11/g, '-');
    result = MORSE_TABLE[result];

    return result;
  };

  let rawArrayOfWords = getRawArrayOfWords(expr);
  let arrayOfWords = [];

  for (let i = 0; i < rawArrayOfWords.length; i++) {
    let rawArrayOfLetters = getRawArrayOfLetters(rawArrayOfWords[i]);
    let arrayOfLetters = [];

    for (let j = 0; j < rawArrayOfLetters.length; j++) {
      let symbol = getLetterFromRawString(rawArrayOfLetters[j]);
      arrayOfLetters.push(symbol);
    }

    let word = arrayOfLetters.join('');
    arrayOfWords.push(word);
  }

  let result = arrayOfWords.join(' ');

  return result;
}

module.exports = {
  decode
}