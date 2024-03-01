import React from "react";

interface InputFieldsProps {
  headerText: string;
  value: string;
  onChangeValue: (value: string) => void;
  isTextArea?: boolean;
  placeholder?: string;
}

export default function InputFields({
  headerText,
  value,
  onChangeValue,
  isTextArea,
  placeholder,
}: InputFieldsProps) {
  return (
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-semibold mb-2">
        {headerText}
      </label>
      {isTextArea ? (
        <textarea
          required
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
