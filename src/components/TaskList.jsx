import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

const TaskList = ({ tasks }) => {
  const theme = useContext(ThemeContext);

  return (
    <div className={`mt-8 ${theme === 'dark' ? 'bg-blue-900 text-white' : 'bg-neutral-100 text-gray-800'} p-4 rounded-lg mx-5 border-2`}>
      <h1 className="text-2xl font-bold mb-4 text-center">Task List</h1>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {tasks.map(task => (
          <div key={task.id} className={`${theme === 'dark' ? 'bg-gray-600' : 'bg-blue-200'} rounded-lg shadow-md p-4 border-2  transition-transform transform hover:scale-105`}>
            <h2 className={`text-lg font-semibold mb-2 py-2 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>{task.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskList;
