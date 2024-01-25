import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Add = ({ onClose }) => {
  const [taskName, setTaskName] = useState('');
  const [description, setDescription] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);
  const [priority, setPriority] = useState('low'); 

  const handleTaskNameChange = (e) => {
    setTaskName(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handlePriorityChange = (e) => {
    setPriority(e.target.value);
  };

  const handleAdd = () => {
    if (taskName.trim() === '' || !selectedDate) {
      return;
    }

    const newTask = {
      taskName,
      description,
      date: selectedDate,
      priority,
    };
    onClose();
  };

  const handleCancel = () => {
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white p-8 rounded-lg w-96">
        <div className="mb-6">
          <label htmlFor="taskName" className="block text-gray-700 text-sm font-semibold mb-2">
            Task Name
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
        <div className="mb-6">
          <label htmlFor="description" className="block text-gray-700 text-sm font-semibold mb-2">
            Description
          </label>
          <textarea
            id="description"
            className="w-full border border-gray-300 px-3 py-2 rounded-sm"
            value={description}
            onChange={handleDescriptionChange}
          ></textarea>
        </div>
        <div className="mb-6">
          <label htmlFor="date" className="block text-gray-700 text-sm font-semibold mb-2">
            Date
          </label>
          <DatePicker
            id="date"
            selected={selectedDate}
            onChange={handleDateChange}
            className="w-full border border-gray-300 px-3 py-2 rounded"
            calendarClassName="w-full border border-gray-300 px-5 py-2 rounded"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="priority" className="block text-gray-700 text-sm font-semibold mb-2">
            Priority
          </label>
          <select
            id="priority"
            className="w-full border border-gray-300 px-3 py-2 rounded"
            value={priority}
            onChange={handlePriorityChange}
          >
            <option value="low" style={{ color: 'green' }}>
              Low
            </option>
            <option value="medium" style={{ color: 'yellow' }}>
              Medium
            </option>
            <option value="high" style={{ color: 'orange' }}>
              High
            </option>
            <option value="urgent" style={{ color: 'red' }}>
              Urgent
            </option>
          </select>
        </div>
        <div className="flex justify-between">
          <button className="bg-gray-300 text-gray-700 px-8 py-2 rounded" onClick={handleCancel}>
            Cancel
          </button>

          <button className="bg-green-500 text-white px-10 py-2 rounded" onClick={handleAdd}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default Add;
 

