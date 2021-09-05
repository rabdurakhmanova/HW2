var myString1 = "Create a function that will take a String value as first parameter, Number value as second and String value as third. First parameter should be a sentence or set of sentences, second parameter should be a number of letter in each word in the sentence that should be replaced by the third parameter. That function should return updated sentence.";
var str1 = myString1.split(/(?:,| )+/);
var myString2 = "If it satisfied show “OK” in console, if not, create new file with properties that not satisfied and reason why.";
var str2 = myString2.split(/(?:,| )+/);
str3 =[]

str1.forEach((word1, index) => {
  const word2 = str2[index];
  var word3 = word1.replace(word1.charAt(0), word2.charAt(0));
var word3 = word3.replace(word3.charAt(1), word2.charAt(1));

str3.push(word3);
let text = str3.join(" ");
console.log(text);
});

/*function DecodeSentence (str1, num, str2) {
    var str1 = myString1.split(/(?:,| )+/);
    for (let x of str1) {
        let neWord = x.slice(number, x.length+1);
        arr.push(newWord);
    }
    arr.forEach((wordstr1, index)=> {
        
    })


    }*/


