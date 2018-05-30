/**
 *  Stworzone przez Eryk Mariankowski dnia 29.05.18.
 */
import * as React from 'react';

const Todo: React.StatelessComponent<ITodoProps> = ({onClick, completed, text}) => (
  <li
    onClick={onClick}
    style={{textDecoration: completed ? 'line-through' : 'none'}}
  >
    {text}
  </li>
);

interface ITodoProps {
  completed: boolean,
  onClick: VoidFunction,
  text: string
}

export default Todo;
