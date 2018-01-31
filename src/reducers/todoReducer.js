
const defaultTodos = [
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
];

export default function todos(state = defaultTodos, action){
    switch (action.type){
        case 'ADD_TODO':
            return [...state, Object.assign({}, action.todo)];
        default:
            return state
    }
}
