import React, { useContext, useState } from 'react';
import { ThemeContext } from './ThemeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'; // Import FontAwesome icons
import ApiPractice from './ApiPractice';

const TaskList = ({ tasks, setData, editTask, removeTask }) => {
  const theme = useContext(ThemeContext);
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [editedTaskTitle, setEditedTaskTitle] = useState('');

  const handleEditInputChange = (event) => {
    setEditedTaskTitle(event.target.value);
  };

  const handleEditSubmit = (taskId) => {
    editTask(taskId, editedTaskTitle);
    setEditingTaskId(null);
    setEditedTaskTitle('');
  };

  return (
    <div className={`mt-8 ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'} p-4 rounded-lg`}>
      {/* <ApiPractice setData={setData}/> */}
      <h1 className="text-2xl font-bold mb-4">Task List</h1>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {tasks.map(task => (
          <div key={task.id} className={`bg-${theme === 'dark' ? 'gray-700' : 'blue-100'} rounded-lg shadow-md p-4 border-2 border-${theme === 'dark' ? 'gray-900' : 'blue-200'} transform hover:scale-105 transition-transform duration-300"`}>
            {editingTaskId === task.id ? (
              <form onSubmit={() => handleEditSubmit(task.id)} className="text-center">
                <input
                  type="text"
                  value={editedTaskTitle}
                  onChange={handleEditInputChange}
                  className={`border border-gray-300 px-3 py-2 rounded-md mb-4 text-gray-800`}
                  placeholder="Enter updated task title"
                  required
                />
                <button
                  type="submit"
                  className={`bg-blue-500 text-white px-4 py-2 rounded-md`}
                >
                  Save
                </button>
              </form>
            ) : (
              <>
                <h2 className={`text-lg font-semibold mb-2 py-2 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>{task.title}</h2>
                <div className="flex justify-between">
                  <button onClick={() => setEditingTaskId(task.id)} className="text-blue-500 hover:text-blue-700"><FontAwesomeIcon icon={faEdit} /></button>
                  <button onClick={() => removeTask(task.id)} className="text-red-500 hover:text-red-700"><FontAwesomeIcon icon={faTrash} /></button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskList;
