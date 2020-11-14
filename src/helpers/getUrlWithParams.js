export const getURLWithParams = (description, location, full_time) =>
	`https://jobs.github.com/positions.json?description=${
		description || ''
	}&full_time=${full_time === false || undefined ? false : true}&location=${
		location || ''
	}`;
