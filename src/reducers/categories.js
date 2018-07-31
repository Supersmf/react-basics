const initialState = [{
        name: 'first',
        tasks: [
                    {title: 'first-task', done:false, value: 'very interesting task'},
                    {title: 'second-task', done:true, value: 'very interesting task'},
                    {title: 'third-task', done:false, value: 'very interesting task'},
                    {title: 'six-task', done:false, value: 'very interesting task'},
                ],
        childs: [{
                name: 'first_inner1',
                tasks: [],
                childs: [
                    { name: 'first_inner1_1', tasks: [], childs: [] }
                ]
            },
            { name: 'first_inner2', tasks: [], childs: [] },
            { name: 'first_inner3', tasks: [], childs: [] },
            { name: 'first_inner4', tasks: [], childs: [] }
        ]
    },

    {
        name: 'second',
        tasks: [
                    {title: 'first-task', done:true, value: 'very interesting task'},
                    {title: 'second-task', done:false, value: 'very interesting task'},
                    {title: 'third-task', done:true, value: 'very interesting task'},
                ],
        childs: [
            { name: 'second_inner1', tasks: [], childs: [] }
        ]
    }
]


export default function toDoList(state = initialState, action) {
    if (action.type === 'ADD_CATEGORY') {

        return [
            { name: action.payload, tasks: [], childs: [] },
            ...state
        ]
    };

    if (action.type === 'ADD_SUBCATEGORY') {
        action.parent.childs.unshift({ name: action.payload, tasks: [], childs: []});
        
        return [...state]
    };

    if (action.type === 'DELETE_CATEGORY') {
        let array = (action.payload.name === action.parent.name) ? 
                    state : action.parent.childs;

        array.map( (item, i, array) => {
            if(item.name === action.payload.name) {
                array.splice( i, 1);
            }
        })
        return [...state]
    };

    if (action.type === 'EDIT_CURRENT_CATEGORY') {
        action.payload.category.name = action.payload.newName
        return [...state];
    } 

    return state;
}
