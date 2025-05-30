import React from 'react';

export default function TodoItem({ todo, dispatch }) {
  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => dispatch({ type: 'TOGGLE_TODO', payload: todo.id })}
      />
      <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
        {todo.text}
      </span>
      <button onClick={() => dispatch({ type: 'DELETE_TODO', payload: todo.id })}>
        Удалить
      </button>
    </div>
  );
}
