const clientSearchReducer = (state = [], action) => {
	switch (action.type) {
		case 'SET_SEARCH_CLIENT':
			return action.payload;
		default:
			return state;
	}
};

export default clientSearchReducer;