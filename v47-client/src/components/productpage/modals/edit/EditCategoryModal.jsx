import React, { useState, useEffect, useContext } from "react";
import InputFields from "../resuable/InputFields";
import Button from "../resuable/Button";
import { productDataContext } from "../../../../context/ProductDataContext";
import { handleEditModal } from "../../../../lib/helpers/handleEditModal";
import Portal from "../Portal/Portal"

function EditModal({
  setIsEditModalOpen,
  setEditCategoryNameInput,
  categoryName,
  editCategoryNameInput,
}) {
  const [taskName, setTaskName] = useState("");
  const { setProductData } = useContext(productDataContext);

  useEffect(() => {
    setTaskName(categoryName);
  }, [categoryName]);

  return (
    <Portal>
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
      <div className="bg-white p-8 rounded-lg w-96">
        <InputFields
          headerText={"Edit Task"}
          value={editCategoryNameInput}
          onChangeValue={setEditCategoryNameInput}
        />

        <Button
          onClick={() => {
            handleEditModal(
              setProductData,
              categoryName,
              editCategoryNameInput
            );
            setIsEditModalOpen(false);
          }}
          onClose={() => setIsEditModalOpen(false)}
          textValue={"Cancel"}
        />
      </div>
    </div>
    </Portal>
  );
}

export default EditModal;
