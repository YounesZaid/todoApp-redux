import React, { Component } from 'react';


let nextTodo = 0;
class TodoApp extends Component {
  state = {
    todoTitle: ''
  }
  render() {
    const { todos, store } = this.props;
    const { todoTitle } = this.state;
    return(
      <div className="todo-container">
        <div>
          <input type="texte" value={todoTitle} onChange={(e) => {
            this.setState({
              todoTitle: e.target.value
            })
          }}/>
          <button onClick={(e) => {
            // alert("clicked");
            e.preventDefault();
            store.dispatch({
              type: 'ADD_TODO',
              text: todoTitle,
              id: nextTodo++
            })
            this.setState({ todoTitle: '' })
          }}>
            Add todo
          </button>
        </div>
        <ul>
          {todos.map(todo => 
            <li key={todo.id} onClick={() => {
              store.dispatch({
                type: "TOGGLE_TODO",
                id: todo.id
              })
            }} style={{ textDecoration: todo.completed ? 'line-through' : 'none'}}>
              {/* {todo.completed ? <i class="zmdi zmdi-badge-check"></i> : ''} */}
              {todo.text}
            </li>
          )}
        </ul>
      </div>
    )
  }
}

export default TodoApp;