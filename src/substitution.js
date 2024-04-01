// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  function substitution(input, alphabet, encode = true) {
    if (!alphabet || alphabet.length !== 26) return false;

    const standardAlphabet = 'abcdefghijklmnopqrstuvwxyz';
    const uniqueChars = new Set(alphabet);

    if (uniqueChars.size !== 26) return false;

    const encodeAlphabet = {};
    const decodeAlphabet = {};
    standardAlphabet.split('').forEach((char, index) => {
      encodeAlphabet[char] = alphabet[index];
      decodeAlphabet[alphabet[index]] = char;
    });

    const selectedAlphabet = encode ? encodeAlphabet : decodeAlphabet;

    return input
      .toLowerCase()
      .split('')
      .map(char => (char === ' ' ? char : selectedAlphabet[char] || char))
      .join('');
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };

