
//List of tasks from server
const getClientTasksReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_CLIENT_TASKS':
            return action.payload;
        default:
            return state;
    }
}
export default getClientTasksReducer;