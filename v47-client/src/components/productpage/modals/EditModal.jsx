import React, { useState, useEffect } from 'react';

function EditModal({ task, onClose, onUpdateTask }) {
  const [taskName, setTaskName] = useState('');

  useEffect(() => {
    setTaskName(task.name);
  }, [task]);

  const handleTaskNameChange = (e) => {
    setTaskName(e.target.value);
  };

  const handleUpdateTask = () => {
    if (taskName.trim() !== '') {
      onUpdateTask(task.id, taskName);
      onClose();
    } else {
    }
  };

  const handleCancel = () => {
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
      <div className="bg-white p-8 rounded-lg w-96">
        <div className="mb-6">
          <label htmlFor="taskName" className="block text-gray-700 text-sm font-semibold mb-2">
            Edit Task
          </label>
          <input
            type="text"
            id="taskName"
            className="w-full border border-gray-300 px-3 py-2 rounded"
            value={taskName}
            onChange={handleTaskNameChange}
            required
          />
        </div>
        <div className="flex justify-between">
          <button
            className="bg-gray-300 text-gray-700 px-8 py-2 rounded"
            onClick={handleCancel}
            required
          >
            Cancel
          </button>

          <button
            className="bg-green-500  text-white px-10 px-10 py-2 rounded"
            onClick={handleUpdateTask}
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditModal;
