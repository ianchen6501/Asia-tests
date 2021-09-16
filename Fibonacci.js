function fibonacci(i) {
	let array = [0, 1, 1];
	if (i <= 2) {
		return array[i];
	}
	for (j = 3; j <= i; j++) {
		array[j] = array[j - 1] + array[j - 2];
	}
	return array[i];
}

module.exports = fibonacci;
