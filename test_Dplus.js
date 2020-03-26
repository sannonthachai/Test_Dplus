function exam(input) {
    let output = [...new Set(input)]
    return output 
}
  
// test cases
var input1 = ["John", "Taylor", "John"];
var output1 = ["John", "Taylor"];
console.log(JSON.stringify(exam(input1)) === JSON.stringify(output1));

var input2 = ["John", "Taylor", "John", "john"];
var output2 = ["John", "Taylor", "john"];
console.log(JSON.stringify(exam(input2)) === JSON.stringify(output2));

var input3 = ["javascript", "python", "python", "ruby", "javascript", "c", "ruby"];
var output3 = ["javascript", "python", "ruby", "c"];
console.log(JSON.stringify(exam(input3)) === JSON.stringify(output3));

var input4 = [1, 2, 2, 2, 3, 2, 5, 2, 6, 6, 3, 7, 1, 2, 5];
var output4 = [1, 2, 3, 5, 6, 7];
console.log(JSON.stringify(exam(input4)) === JSON.stringify(output4));

var input5 = ["#", "#", "%", "&", "#", "$", "&"];
var output5 = ["#", "%", "&", "$"];
console.log(JSON.stringify(exam(input5)) === JSON.stringify(output5));

var input6 = [3, "Apple", 3, "Orange", "Apple"];
var output6 = [3, "Apple", "Orange"];
console.log(JSON.stringify(exam(input6)) === JSON.stringify(output6));