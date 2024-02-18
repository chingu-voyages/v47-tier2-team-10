import React from "react";

export default function InputFields({
  headerText,
  value,
  onChangeValue,
  isTextArea,
  placeholder
}) {
  return (
    <div className="mb-6">
      <label
        className="block text-gray-700 text-sm font-semibold mb-2"
      >
        {headerText}
      </label>
      {isTextArea ? (
        <textarea
          className="w-full border resize-none border-gray-300 px-3 py-2 rounded-sm"
          value={value}
          onChange={(e) => onChangeValue(e.target.value)}
        ></textarea>
      ) : (
        <input
          type="text"
          placeholder={placeholder}
          className="w-full border  border-gray-300 px-3 py-2 rounded"
          value={value}
          onChange={(e) => onChangeValue(e.target.value.toLowerCase())}
          required
        />
      )}
    </div>
  );
}
