
const initState = {
    todos : [
        {
            id: 0,
            name: 'PHP',
            is_complete: false
        },
        {
            id: 1,
            name: 'Javascript',
            is_complete: true
        },
        {
            id: 2,
            name: 'Javascript',
            is_complete: false
        }
    ]
};

export default (state = initState, action) => {
    switch(action){
        case 'ADD_TODO':
           return {
               ...state,
               todos: state.todos.concat(action.payload)
           };
        case 'DECREMENT':
           return state - 1;
        default:
           return {...state};
    }
};