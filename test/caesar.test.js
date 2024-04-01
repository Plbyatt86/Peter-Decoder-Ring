// Write your tests here!
const caesarModule = (function () {
    function caesar(input, shift, encode = true) {
      if (!shift || shift < -25 || shift > 25) return false;
  
      if (!encode) shift = -shift;
  
      return input
        .toLowerCase()
        .split('')
        .map(char => {
          if (char.match(/[a-z]/)) {
            let code = char.charCodeAt(0);
            code = code + shift;
            if (code > 122) code -= 26;
            if (code < 97) code += 26;
            return String.fromCharCode(code);
          }
          return char;
        })
        .join('');
    }
  
    return {
      caesar,
    };
  })();
  
  module.exports = { caesar: caesarModule.caesar };
  