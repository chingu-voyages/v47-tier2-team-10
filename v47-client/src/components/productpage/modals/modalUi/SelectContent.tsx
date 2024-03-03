import React from "react";
interface SelectContentProps {
  handleInputContent: (value: string, value2: string) => void;
  column: string;
}

export default function SelectContent(props: SelectContentProps) {
  const { column, handleInputContent } = props;
  return (
    <select
      className="hover:opacity-60 duration-100 cursor-pointer"
      onChange={(e) => handleInputContent("column", e.target.value)}
      value={column}
    >
      <option value="Not Started">Not Started</option>
      <option value="In Progress">In Progress</option>
      <option value="Done">Done</option>
    </select>
  );
}
