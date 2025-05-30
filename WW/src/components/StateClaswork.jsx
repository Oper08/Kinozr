import React, { useState } from 'react';

export default function StateClasswork() {
    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState([
        { taskName: "Тапсырма 1", completed: true },
        { taskName: "Кунделикти уй тапсырмасын орындау", completed: false }
    ]);

    function handleSubmit(e) {
        e.preventDefault();
        setTasks([...tasks, { taskName: task, completed: false }]);
        setTask('');
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input value={task} type="text" onChange={(e) => setTask(e.target.value)} />
                <button type="submit">косу</button>
            </form>
            <ul>
                {tasks.map((taskItem, index) => (
                    <li key={index}>
                        {taskItem.taskName}
                        {taskItem.completed ? 
                            <button style={{ color: "green" }}>✔</button> : 
                            <button>🇰🇿</button>
                        }
                    </li>
                ))}
            </ul>
        </div>
    );
}