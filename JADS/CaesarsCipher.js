function rot13(encodedStr) {
    let decodedStr = "";
  
    for (let i = 0; i < encodedStr.length; i++) {
      let char = encodedStr[i];
      if (char.match(/[A-Za-z]/)) {
        let ascii = char.charCodeAt(0);
        let offset = char <= "Z" ? 65 : 97;
        let decodedChar = String.fromCharCode(((ascii - offset + 13) % 26) + offset);
        decodedStr += decodedChar;
      } else {
        decodedStr += char;
      }
    }
    return decodedStr;
  }
  
  console.log(rot13("SERR PBQR PNZC")); //FREE CODE CAMP
  console.log(rot13("SERR CVMMN!")); // FREE PIZZA
  console.log(rot13("SERR YBIR?")); // FREE LOVE?
  console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.")); // THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.