// From Eloquent JS, exercise practice.

/*
Output in console log with a loop.
#
##
###
####
#####
######
#######

*/
//Soulution. .length to specify when the for loop should end.
//Remembering it's a string, not a number value --> "#" gets added until length maxes at 7.
for (var counter = "#"; counter.length <=7; counter = counter + "#")
console.log(counter);
