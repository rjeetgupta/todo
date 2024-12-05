import React, { useState } from 'react';

const AddTask = ({ addTask }) => {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(task);
    setTask('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex mb-4">
      <input
        type="text"
        placeholder="Enter Your Task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        required
        className="w-full px-4 py-2 border rounded mr-2 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-200"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 dark:bg-blue-600 text-white font-bold rounded hover:bg-blue-600 dark:hover:bg-blue-700"
      >
        Add Task
      </button>
    </form>
  );
};

export default AddTask;
