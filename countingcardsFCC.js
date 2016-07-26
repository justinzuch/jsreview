//Counting cards exercise on FCC. Using SWITCH and then work out IF..ELSE chain


var count = 0;

function cc(card) {
	switch (card) {
	case 2:
	case 3:
	case 4:
	case 5:
	case 6:
		count+=1;
		break;
	case 7:
	case 8:
	case 9:
		count=+0;
		break;
	case 10:
	case "J":
	case "Q":
	case "K":
	case "A":
		count-=1;
		break;
	}
	
	return count + (count > 0 ? " Bet" : " Hold"); 
//Conditional (ternary) operator, it's the only JS operator with 3 operands
//MDN example: var status = (age >= 18) ? "adult" : "minor";
//Will only look at the condition age over 18 to adult, anything else gets minor
}
cc(2); cc(3); cc(7); cc('K'); cc('A');
