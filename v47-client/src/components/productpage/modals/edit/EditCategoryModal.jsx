import React, { useState, useEffect } from "react";
import InputFields from "../resuable/InputFields";
import Button from "../resuable/Button";

function EditModal({
  onClose,
  handleEditModal,
  setEditCategoryNameInput,
  categoryName,
  editCategoryNameInput,
}) {

  const [taskName, setTaskName] = useState("");

  useEffect(() => {
    setTaskName(categoryName);
  }, [categoryName]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
      <div className="bg-white p-8 rounded-lg w-96">
      
        <InputFields
          headerText={"Edit Task"}
          value={editCategoryNameInput}
          onChangeValue={setEditCategoryNameInput}
        />

        <Button
          onClick={() => handleEditModal(taskName)}
          onClose={onClose}
          textValue={"Cancel"}
        />
      </div>
    </div>
  );
}

export default EditModal;
