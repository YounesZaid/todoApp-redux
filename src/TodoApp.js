import React, { Component } from 'react';


let nextTodo = 0;
class TodoApp extends Component {
  state = {
    todoTitle: ''
  }
  render() {
    const { todos, visibilityFilter, store } = this.props;
    const { todoTitle } = this.state;
    const visibleTodos = getVisibleTodos(todos, visibilityFilter);
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
          {visibleTodos.map(todo => 
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
        <div className="footer-links">
          <FilterLink filter="SHOW_ALL" store={store}>
            All
          </FilterLink>
          {' '}
          <FilterLink filter="SHOW_ACTIVE" store={store}>
            Active
          </FilterLink>
          {' '}
          <FilterLink filter="SHOW_COMPLETED" store={store}>
            Completed
          </FilterLink>
        </div>
      </div>
    )
  }
}

const FilterLink = ({ store, filter, children }) => {
  return(
    <a href="#" onClick={e => {
      e.preventDefault();
      store.dispatch({
        type: "SET_VISIBILITY_FILTER",
        filter
      })
    }}>
      {children}
    </a>
  )
}

const getVisibleTodos = (todos, filter) => {
  switch(filter) {
    case "SHOW_ALL":
      return todos;
    case "SHOW_COMPLETED":
      return todos.filter(
        t => t.completed
      );
    case "SHOW_ACTIVE":
      return todos.filter(
        t => !t.completed
      );
  }
}

export default TodoApp;