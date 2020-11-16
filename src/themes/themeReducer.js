const types = {
	toggleDarkMode: 'TOGGLE_DARK_MODE',
};

export const themeReducer = (state = {}, action) => {
	switch (action.type) {
		case types.toggleDarkMode:
			return {
				isDark: !state.isDark,
			};

		default:
			return state;
	}
};
