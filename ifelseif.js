function testSize(num) {
     if (num < 5) {
     size = "Tiny";
} 
     else if (num < 10)  {
     size = "Small";
} 
     else if (num < 15) {
     size = "Medium";
} 
     else if (num < 20) {
     size = "Large";
} 
else {
     size = "Huge";
}
// Realized I had been missing the opening "{" in the first if condition... Got it now!
return size;
}
// Tests
testSize(0);
testSize(4);
testSize(5);
testSize(8);
testSize(10);
testSize(14);
testSize(15);
testSize(17);
testSize(20);
testSize(25);
