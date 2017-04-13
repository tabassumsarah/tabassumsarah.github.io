Array.prototype.map.call(['a','b'], function(inputLine, index, arr){
    console.log(inputLine);
    console.log(index);
    console.log(arr);
    return inputLine.toUpperCase() ;
});