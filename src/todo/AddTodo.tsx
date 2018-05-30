/**
 *  Stworzone przez Eryk Mariankowski dnia 30.05.18.
 */
import * as React from 'react';
import {connect, DispatchProp} from 'react-redux';
import {addTodo} from './actions';


const AddTodo: React.StatelessComponent<DispatchProp<any>> = ({dispatch}) => {

  let input: HTMLInputElement;

  function onSubmit(e) {
    e.preventDefault();
    if (!input.value.trim()) {
      return;
    }
    dispatch(addTodo(input.value));
    input.value = '';
  }

  return (
    <div>
      <form
        onSubmit={onSubmit}
      >
        <input ref={node => {
          input = node!;
        }} />
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default connect()(AddTodo);
