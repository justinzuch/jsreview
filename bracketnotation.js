// Reviewing bracket notation in Arrays 
// Calls out outer brackets first, then selects within 

var myArray = [[1,2,3], [4,5,6], [7,8,9]];
undefined
myArray[0][0]              //calls for the first array (1,2,3) and then selects 1 at 0 point
1
myArray[2][1]              //should return 8
8
myArray[2][1] ++           //should return 9 *watch for the space in there
8
myArray[2][1]++            //should return 9
9                          //note the lack of space on the increment operator "++"
