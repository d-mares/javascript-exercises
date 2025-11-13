const palindromes = function (str) {
  let cleaned_str = "",
    palindrome = "";
  for (let i = 0; i < str.length; i++) {
    if ([",", " ", "?", ".", "!"].includes(str[i])) continue;
    cleaned_str = `${cleaned_str + str[i].toLowerCase()}`;
    console.log(cleaned_str);
  }
  for (let k = cleaned_str.length - 1; k >= 0; k--) {
    palindrome = `${palindrome + cleaned_str[k].toLowerCase()}`;
    console.log(palindrome);
  }
  return palindrome == cleaned_str;
};

// Do not edit below this line
module.exports = palindromes;
