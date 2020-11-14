export const getUrlWithCors = (BASE_URL) => {
	return `https://api.allorigins.win/raw?url=${encodeURIComponent(
		BASE_URL
	)}`;
};
