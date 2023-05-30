  function cleanUpNonAlpha(str) {
    return str.replace(/[\W_]/g, "");
  }
  function makeUppercaseStr(str) {
    return str.toUpperCase(str);
  }
  /*function flipStr(str) {
    let result = "";
    for (let i= str.length-1; i>=0;i--) {
      result += str[i];
    }
    return result;
  }
  */
  function fancyFlipStr(str) {
    return str.split('').reverse().join('');
  }
  function palindrome(str) {
    const cleanedUpStr = cleanUpNonAlpha(str);
    const uppercaseStr = makeUppercaseStr(cleanedUpStr);
    const reversedStr = fancyFlipStr(uppercaseStr);
    return reversedStr === uppercaseStr;
  }
  
  console.log(palindrome("racecar"));