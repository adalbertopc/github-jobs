export const getJobDate = (initialDate) => {
	const date1 = new Date(initialDate);
	const date2 = new Date();
	const diffTime = Math.abs(date2 - date1);
	const timeAgo = Math.ceil(diffTime / (1000 * 60 * 60));

	if (timeAgo < 24) {
		return timeAgo;
	} else {
		return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
	}
};
