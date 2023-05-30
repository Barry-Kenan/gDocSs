export const getIdFromUrl = (url: string): string => {
	const match = url.match(/[-\w]{25,}/);
	if (match) {
		return match[0];
	}
	return url;
};
