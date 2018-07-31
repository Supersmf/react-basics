const initialState = {};


export default function toDoList(state = initialState, action) {
    
    if (action.type === 'SHOW_CURRENT_TASKS') {
        return {...action.payload};
    }

    if (action.type === 'EDIT_CURRENT_TASKS') {
        action.payload.task.title = action.payload.newName;
        return {...action.payload};
    }   

    if (action.type === 'DONE_TASKS') {
        action.payload.task.done = action.payload.done;
        return {...action.payload};
    }    
    
    if (action.type === 'ADD_TASK') {
        if(Object.keys(state).length !== 0) {
            state.tasks.push(
                {title: action.payload, done:false, value: 'very interesting task'})
        }
        return {...state};
    }

    return state;
}
