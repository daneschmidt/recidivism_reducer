const getProfileReducer = (state = [], action) => {
	switch (action.type) {
		case 'SET_PROFILE':
			return action.payload;
		case 'SET_EDIT_PROFILE':
			return action.payload;
		default:
			return state;
	}
};
export default getProfileReducer;
