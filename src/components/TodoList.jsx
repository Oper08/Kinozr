import React, { useReducer, useState } from 'react';
import TodoReducer from '../Pages/TodoReducer';
import TodoItem from '../Pages/TodoItem';

export default function TodoList() {
  const [state, dispatch] = useReducer(TodoReducer, { todos: [] });
  const [input, setInput] = useState('');

  const handleAddTodo = () => {
    if (input.trim()) {
      dispatch({ type: 'ADD_TODO', payload: input });
      setInput('');
    }
  };

  return (
    <div className="todo-container">
      <h1>Todo List</h1>
      <div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Введите задачу"
        />
        <button onClick={handleAddTodo}>Добавить</button>
      </div>
      <div>
        {state.todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} dispatch={dispatch} />
        ))}
      </div>
    </div>
  );
}
