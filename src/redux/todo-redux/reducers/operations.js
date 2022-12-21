
import { ADD_TODO, DELETE_ALL, REMOVE_TODO, UPDATE_CHECK, UPDATE_TODO } from "../actions";

const initialState = [
    { id: 1, todo: 'Buy Laptop', completed: false },
    { id: 2, todo: 'Master Redux', completed: false },
    { id: 3, todo: 'Learn Redux', completed: true },
];

export const oprationsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return [...state, action.payload];
        case DELETE_ALL:
            return [];
        case REMOVE_TODO:
            const filterTodos = state.filter((todo) => todo.id !== action.payload);
            return filterTodos;
        case UPDATE_TODO:
            let data = action.payload;
            const updatedArray = [];
            state.map((item) => {
                if (item.id === data.id) {
                    item.id = data.id;
                    item.todo = data.todo;
                    item.completed = data.completed;
                }
                updatedArray.push(item);
            })
            return updatedArray;
            case UPDATE_CHECK:
                let todoArray = [] ;
                state.map((item) =>{
                    if(item.id===action.payload){
                        item.completed = !item.completed;
                    }
                    todoArray.push(item);
                })
                return todoArray;
        default: return state;
    }
}