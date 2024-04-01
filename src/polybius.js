// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6
const polybiusModule = (function () {
  function polybius(input, encode = true) {
    const alphabet = {
      a: '11',
      b: '21',
      c: '31',
      d: '41',
      e: '51',
      f: '12',
      g: '22',
      h: '32',
      i: '42',
      j: '42',
      k: '52',
      l: '13',
      m: '23',
      n: '33',
      o: '43',
      p: '53',
      q: '14',
      r: '24',
      s: '34',
      t: '44',
      u: '54',
      v: '15',
      w: '25',
      x: '35',
      y: '45',
      z: '55',
    };

  const flipAlphabet = Object.fromEntries(
      Object.entries(alphabet).map(([key, value]) => [value, key])
    );

    if (!encode) {
      // Decoding
      const decodedInput = [];
      let pair = '';

      for (let char of input) {
        if (char === ' ') {
          decodedInput.push(char);
        } else {
          pair += char;
          if (pair.length === 2) {
            // Handle special case for '42' decoding to both 'i' and 'j'
            if (pair === '42') {
              decodedInput.push('(i/j)');
            } else {
              decodedInput.push(flipAlphabet[pair] || false);
            }
            pair = '';
          }
        }
      }

      // Check if any incomplete pairs left
      if (pair.length === 1) return false;

      return decodedInput.join('');
    }

    // Encoding
    return input
      .toLowerCase()
      .split('')
      .map(char => {
        if (char === ' ') return char;
        return alphabet[char] || false;
      })
      .join('');
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };