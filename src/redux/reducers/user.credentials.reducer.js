import { combineReducers } from 'redux';

const userCredentials = (state = [], action) => {
    switch (action.type) {
      case 'SET_USER_CREDENTIALS':
        return [
          ...action.payload
        ];
      case 'UNSET_USER_CREDENTIAL':
        return {};
      default:
        return state;
    }
  };
  
  // user will be on the redux state at:
  // state.user
  export default combineReducers({
    userCredentials,
});