import { combineReducers } from 'redux';

const clientReducer = (state = {}, action) => {
    switch (action.type) {
      case 'SET_CLIENT':
        return action.payload;
      case 'UNSET_CLIENT':
        return {};
      default:
        return state;
    }
  };

export default combineReducers({
    clientReducer,
});