import React from 'react';

const TaskItem = ({ task, deleteTask, updateTask }) => {
  return (
    <li className="flex justify-between items-center p-4 border-b bg-white dark:bg-gray-800 dark:border-gray-700">
      <span className="text-gray-900 dark:text-gray-200">{task.text}</span>
      <div className="flex space-x-2">
        <button
          onClick={() => updateTask(task)}
          className="px-4 py-2 bg-yellow-400 dark:bg-yellow-600 text-gray-800 dark:text-gray-200 font-bold rounded hover:bg-yellow-500 dark:hover:bg-yellow-700"
        >
          Edit
        </button>
        <button
          onClick={() => deleteTask(task.id)}
          className="px-4 py-2 bg-red-500 dark:bg-red-700 text-white font-bold rounded hover:bg-red-600 dark:hover:bg-red-800"
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default TaskItem;
