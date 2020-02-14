//List off all client names and ids
const getAllClientsReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_CLIENTS_LIST':
            return action.payload;
        default:
            return state;
    }
}
export default getAllClientsReducer;