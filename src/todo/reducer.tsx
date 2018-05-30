import {ADD_TODO, SET_VISIBILITY_FILTER, TOGGLE_TODO, VisibilityFilters} from './actions';

class Todo {
  public text: string;
  public completed: boolean;
}

export function todos(state = [], action: any) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          completed: false,
          text: action.text
        }
      ];
    case TOGGLE_TODO:
      return state.map((todo: Todo, index) => {
        if (index === action.index) {
          return Object.assign({}, todo, {
            completed: !todo.completed
          });
        }
        return todo;
      });
    default:
      return state;
  }
}

export function visibilityFilter(state = VisibilityFilters.SHOW_ALL, action: any) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
}

export function todoApp(state: any = {}, action: any) {
  return {
    todos: todos(state.todos, action),
    visibilityFilter: visibilityFilter(state.visibilityFilter, action),
  };
}

