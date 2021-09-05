var fs = require('fs');


fs.readFile('file.json', 'utf8', function(err, ReadData){
    if (err) throw err;

    var result = JSON.parse(ReadData);
    console.log(result);
    
    
    const values = Object.values(result);
    arr = [];
    if (typeof values[0] != 'boolean') {
    arr.push(values[0]);}
        else {
    console.log(arr);}
    if (Array.isArray(values[1])) {
    console.log(arr);}
        else {
    arr.push(values[1]);}
    if (typeof values[2] != 'object'){
    arr.push(values[2]);}
        else {
    console.log(arr);}
    if (typeof values[3] != 'null'){
    arr.push(values[3]);}
        else {
    console.log(arr);}
    if (typeof values[4] != 'string'){
    arr.push(values[4]);}
        else {
    console.log(arr);}
    if (values[5].includes('const')){
    console.log(arr);}
        else {
    arr.push(values[5]);}
    if (values[6]> 10){
    arr.push(values[6]);}
        else {
    console.log(arr);}
    if (values[7]!=='Common'){
        arr.push(values[7]);}
        else {
        console.log(arr);}
    if (values[8].toLowerCase() !== 'FiRSt'.toLowerCase()){
            arr.push(values[8]);}
        else {
            console.log(arr);}
    if (values[9].length != 8){
            arr.push(values[9]);}
        else {
            console.log(arr);}
    if (values[10].length >5 && values[10].length <13) {
        console.log();}
        else {
            arr.push(values[10]);} 
    
 
    fs.writeFile('newfile.json'),"utf8", function(err, arr) {
        if (err) throw err;}    

console.log(arr);
    })
