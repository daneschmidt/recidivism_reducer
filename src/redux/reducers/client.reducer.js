const clientReducer = (state = [], action) => {
	switch (action.type) {
		case 'SET_CLIENTS':
			return action.payload;
		case 'SET_SEARCH_CLIENT':
			return action.payload;
		default:
			return state;
	}
};

export default clientReducer;
