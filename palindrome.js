function verifyPalindrome(str) {  
   
    const len = string.length;  
  

    for (let i = 0; i < len / 2; i++) {  
  
      
        if (string[i] !== string[len - 1 - i]) {  
            alert( 'It is not a palindrome');  
        }  
    }  
    alert( 'It is a palindrome');  
}  
 
const string = prompt('Enter a string: ');  
  
const value = verifyPalindrome(string);  
  