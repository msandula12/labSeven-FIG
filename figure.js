list = [];

function makeArray(a, b) {
	if (a < b) {
		var i;
		for (i = a; i <= b; i++) {
			list.push(i);
		}
	} else if (a > b) {
		for (i = b; i <= a; i++) {
			list.push(i);
		}
	}
}

makeArray(-4, 2);
console.log(list);