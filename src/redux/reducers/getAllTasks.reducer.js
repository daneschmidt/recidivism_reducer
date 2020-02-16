
//List of tasks from server
const getAllTasksReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_ALL_TASKS':
            return action.payload;
        default:
            return state;
    }
}
export default getAllTasksReducer;