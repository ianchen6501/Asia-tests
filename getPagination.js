const getPagination = (offset, limit, total) => {
	let currentPage;
	let totalPage;
	let renderPages = [];

	//get totalPage and currentPage
	totalPage = Math.ceil(total / limit);
	currentPage = Math.ceil((offset + 1) / limit);

	//get currentPage
	//less than five pages
	if (totalPage <= 5) {
		for (let i = 1; i <= totalPage; i++) {
			renderPages.push(i);
		}
	}
	//more or equal to five pages
	if (totalPage > 5 && currentPage <= 3) {
		for (let i = 1; i <= 5; i++) {
			renderPages.push(i);
		}
	}
	if (totalPage > 5 && totalPage - currentPage <= 2) {
		for (let i = 0; i <= 4; i++) {
			renderPages.unshift(totalPage - i);
		}
	}
	if (totalPage > 5 && currentPage > 3 && totalPage - currentPage > 2) {
		for (let i = -2; i <= 2; i++) {
			renderPages.unshift(currentPage - i);
		}
	}

	return { currentPage, totalPage, renderPages };
};

console.log(getPagination(1, 5, 30));

module.exports = getPagination;
