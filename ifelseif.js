function testSize(num) {

// Below
     if (num < 5) {
    size = "Tiny";
} else if (num < 10)  {
    size = "Small";
} else if (num < 15) {
    size = "Medium";
} else if (num < 20) {
    size = "Large";
} else {
    size = "Huge";
}
    

// Realized I had been missing the opening "{" in the first if condition... Got it now!
return size;
}
