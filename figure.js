var list;

function makeArray(a, b) {
	for (var i = a; i <= b; i ++) {
		console.log([i]);
	}
}

function makeArray(a, b) {
	if (a < b) {
		var i;
		for (i = a; i <= b; i++) {
			console.log([i]);
		}
	} else if (a > b) {
		for (i = b; i <= a; i++) {
			console.log([i]);
		}
	}
}

makeArray(-4, 2);