import * as React from 'react';
import './App.css';
import AddTodo from './todo/AddTodo';
import Footer from './todo/Footer';
import VisibleTodoList from './todo/VisibleTodoList';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <AddTodo />
        <VisibleTodoList />
        <Footer />
      </div>
    );
  }
}

export default App;
