function telephoneCheck(str) {
  var regex = /^(1\s?)?(\(\d{3}\)|\d{3})[-\s]?(\d{3})[-\s]?(\d{4})$/;
  return regex.test(str);
}
console.log(telephoneCheck("555-555-5555")); //true
console.log(telephoneCheck("0 (757) 622-7382")); //false
console.log(telephoneCheck("55 55-55-555-5")); //false
console.log(telephoneCheck("1 555-555-5555")); //true