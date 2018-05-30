/**
 *  Stworzone przez Eryk Mariankowski dnia 29.05.18.
 */
import * as React from 'react';
import Todo from './Todo';

const onClick = (index, onTodoClick) => () => onTodoClick(index);

const TodoList: React.StatelessComponent<ITodoListProps> = ({todos, onTodoClick}) => (
  <ul>
    {todos.map((todo, index) =>
      <Todo key={index} {...todo} onClick={onClick(index, onTodoClick)} />
    )}
  </ul>
);

interface ITodoListProps {
  todos: ITodo[],
  onTodoClick: () => {}
}

export default TodoList;
