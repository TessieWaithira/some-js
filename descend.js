/*A function that can take any non-negative integer as a argument
and return it with it's digits in descending order.
Essentially, rearrange the digits to create the highest possible number.
*/
function descendingOrder(n) {
	return parseInt(n.toString().split("").sort().reverse().join(""))
}