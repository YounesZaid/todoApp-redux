import React, { Component } from 'react';


let nextTodo = 0;
class TodoApp extends Component {

  render() {
    const { todos, store } = this.props;
    return(
      <div className="todo-container">
        <form>
          <input/>
          <button onClick={(e) => {
            // alert("clicked");
            e.preventDefault();
            store.dispatch({
              type: 'ADD_TODO',
              text: 'TEST',
              id: nextTodo++
            })
          }}>
            Add todo
          </button>
        </form>
        <ul>
          {todos.map(todo => 
            <li key={todo.id}>
              {todo.text}
            </li>
          )}
        </ul>
      </div>
    )
  }
}

export default TodoApp;