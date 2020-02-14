const clientReducer = (state = [], action) => {
	switch (action.type) {
		case 'SET_CLIENTS':
			return action.payload;
		default:
			return state;
	}
};

export default clientReducer;
