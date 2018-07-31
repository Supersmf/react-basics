const initialState = ['', false]


export default function toDoList(state = initialState, action) {
    
    if (action.type === 'SEARCH_TASK') {
        return [action.payload.task, action.payload.done];
    }    

    return state;
}
