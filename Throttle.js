const throttleFunc = (func, timeout) => {
	let last;
	let timer;
	return function () {
		const now = new Data().getTime();
		if (last && now < last + 200) {
			clearTimeout(timer);
			timer = setTimeout(() => {
				last = now;
				func.apply(this, arguments);
			}, timeout);
		} else {
			last = now;
			func.apply(this, arguments);
		}
	};
};

module.exports = throttleFunc;
