import React from "react";

export default function InputFields({
  headerText,
  value,
  onChangeValue,
  isTextArea,
}) {
  return (
    <div className="mb-6">
      <label
        // htmlFor="taskName"
        className="block text-gray-700 text-sm font-semibold mb-2"
      >
        {headerText}
      </label>
      {isTextArea ? (
        <textarea
          // id="description"
          className="w-full border resize-none border-gray-300 px-3 py-2 rounded-sm"
          value={value}
          onChange={(e) => onChangeValue(e.target.value)}
        ></textarea>
      ) : (
        <input
          type="text"
          // id="taskName"
          className="w-full border  border-gray-300 px-3 py-2 rounded"
          value={value}
          onChange={(e) => onChangeValue(e.target.value)}
          required
        />
      )}
    </div>
  );
}