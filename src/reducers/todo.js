
const initState = {
    todos : []
};

export default (state = initState, action) => {

    console.log(state);

    // switch(action){
    //     case 'ADD_TODO':
    //        return {
    //            ...state,
    //            todos: state.todos.concat(action.payload)
    //        };
    //     case 'DECREMENT':
    //        return state - 1;
    //     default:
    //        return 0;
    // }
};