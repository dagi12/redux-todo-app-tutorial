import {AnyAction} from 'redux';

interface IStringMap {
  [key: string]: string
}

export const VisibilityFilters: IStringMap = {
  SHOW_ACTIVE: 'SHOW_ACTIVE',
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
};

export function addTodo(text: string): AnyAction {
  return {
    text,
    type: ADD_TODO
  };
}

export function toggleTodo(index: number): AnyAction {
  return {
    index,
    type: TOGGLE_TODO
  };
}

export function removeTodo(index: number): AnyAction {
  return {
    index,
    type: REMOVE_TODO
  };
}

export function setVisibilityFilter(filter: string): AnyAction {
  return {
    filter,
    type: SET_VISIBILITY_FILTER
  };
}

export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';
