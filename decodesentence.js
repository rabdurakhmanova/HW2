
function DecodeSentence (myString1, num, str2) {
    var str1 = myString1.split(/(?:,| )+/);
    arr = [];
    finalArr = [];
    for (let x of str1) {
        let newWord = x.slice(num, x.length+1);
        arr.push(newWord);}
    for (let x of arr) {
        var word2 = str2.concat(x);
finalArr.push(word2);
        console.log(finalArr);
    }

    } 
DecodeSentence('Please visit Microsoft!', 2, 'foo')
