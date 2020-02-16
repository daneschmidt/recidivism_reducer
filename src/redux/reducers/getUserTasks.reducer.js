
//List of tasks from server
const getUserTasksReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_USER_TASKS':
            return action.payload;
        default:
            return state;
    }
}
export default getUserTasksReducer;