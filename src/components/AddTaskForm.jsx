import React, { useState, useContext } from 'react';
import { ThemeContext } from './ThemeContext';

const AddTaskForm = ({ addTask }) => {
    const [title, setTitle] = useState('');
    const theme = useContext(ThemeContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title) return;
        addTask({ id: Math.random(), title });
        setTitle('');
    };

    return (
        <div className={`mt-8 ${theme === 'dark' ? 'bg-blue-900 text-white' : 'bg-neutral-100 text-gray-800'} p-4 rounded-lg shadow-md mx-5 border-2`}>
            <h1 className="text-2xl font-bold mb-4">Add Task</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className={`border border-gray-300 px-3 py-2 rounded-md mr-2 text-gray-800`}
                    placeholder="Enter task title"
                    required
                />
                <button
                    type="submit"
                    className={`bg-blue-500 text-white px-4 py-2 rounded-md `}
                >
                    Add Task
                </button>
            </form>
        </div>
    );
};

export default AddTaskForm;

