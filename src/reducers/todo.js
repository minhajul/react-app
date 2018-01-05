
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
    ],

    currentTodo: ''
};

export default (state = initState, action) => {
    switch(action){
        case 'ADD_TODO':
           return {
               ...state,
               todos: state.todos.push(action.payload)
           };
        case 'UPDATE_CURRENT':
           return {...state, currentTodo: action.payload};
        default:
           return {...state};
    }
};