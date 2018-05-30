import {FormEvent, FormEventHandler, MouseEvent, MouseEventHandler} from 'react';
import {Dispatch} from 'react-redux';
import {StringAction} from './common-types';

export const preventDefaultFun = (onClick: VoidFunction): MouseEventHandler<any> => (e: MouseEvent<any>) => {
  e.preventDefault();
  onClick();
};

const formEventHandler = (input: HTMLInputElement, dispatch: Dispatch, addTodo: StringAction): FormEventHandler<any> => (e: FormEvent<any>) => {
  e.preventDefault();
  if (!input.value.trim()) {
    return;
  }
  dispatch(addTodo(input.value));
  input.value = '';
};
