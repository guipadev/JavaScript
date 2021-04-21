/*
In the casino game Blackjack, a player can gain an advantage over the house by keeping track of the relative number of high and low cards remaining in the deck. This is called Card Counting.

Having more high cards remaining in the deck favors the player. Each card is assigned a value according to the table below. When the count is positive, the player should bet high. When the count is zero or negative, the player should bet low.

Count Change	Cards
+1	2, 3, 4, 5, 6
0	7, 8, 9
-1	10, 'J', 'Q', 'K', 'A'
You will write a card counting function. It will receive a card parameter, which can be a number or a string, and increment or decrement the global count variable according to the card's value (see table). The function will then return a string with the current count and the string Bet if the count is positive, or Hold if the count is zero or negative. The current count and the player's decision (Bet or Hold) should be separated by a single space.

Example Output
-3 Hold
5 Bet

Hint
Do NOT reset count to 0 when value is 7, 8, or 9.
Do NOT return an array.
Do NOT include quotes (single or double) in the output.
*/



var count = 0;

function cc(card) {
  // Only change code below this line
  var regex = /[JQKA]/;
  if (card > 1 && card < 7) {
    count++;
  } else if (card === 10 || String(card).match(regex)) {
    count--;
  }

  if (count > 0) return count + " Bet";
  return count + " Hold";

  // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');

/*
Counting Cards 157
Hints
Hint 1
Use a switch (or else if) statement to count the value of each card.

Hint 2
Add/subtract the value of each card to variable count. If the card is worth 0, don’t do anything.

Hint 3
After you’ve counted the cards, use an if statement to check the value of count. Also, make sure your return has a space between the number and the string.

Solutions
Solution 1 (Click to Show/Hide)
let count = 0;

function cc(card) {
  // Only change code below this line
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count--;
      break;
  }
  if (count > 0) {
    return count + " Bet";
  } else {
    return count + " Hold";
  }
  // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');
Code Explanation
Check the value of each card via a switch statement.
The variable count:
Increases by 1 if the card is a 2, 3, 4, 5, or 6.
Since 7, 8, and 9 aren’t worth anything, we ignore those cards in our switch statement.
Decreases by 1 if the card is a 10, ‘J’, ‘Q’, ‘K’, or ‘A’.
Check the value of count and return the appropriate response.
Example Run

cc(2); runs.
The switch statement hits case 2, jumps down and adds 1 to the variable count.
The switch statement then hits the break and cc(3); runs.
This cycle continues until the final call is made, cc('A');.
After the switch statement, the if statement checks count, which is now 0.
This then drops down to the else statement, which will return 0 Hold.
Note: As mentioned earlier, the switch statement could have also been an else if statement.

Solution 2 (Click to Show/Hide)
function cc(card) {
  // Only change code below this line
  var regex = /[JQKA]/;
  if (card > 1 && card < 7) {
    count++;
  } else if (card === 10 || String(card).match(regex)) {
    count--;
  }

  if (count > 0) return count + " Bet";
  return count + " Hold";

  // Only change code above this line
}
*/