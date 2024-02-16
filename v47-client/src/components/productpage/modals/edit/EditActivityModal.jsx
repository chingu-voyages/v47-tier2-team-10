import React, { useState, useEffect, useContext } from "react";
import InputFields from "../resuable/InputFields";
import Button from "../resuable/Button";
import { productDataContext } from "../../../../context/ProductDataContext";
import Portal from "../Portal/Portal";

function EditModal({
  setIsEditModalOpen,
  setEditActivityNameInput,
  categoryName,
  activityName,
  editActivityNameInput,
}) {
  const { productData, setProductData } = useContext(productDataContext);

  const handleClick = () => {
    let updatedProductData = [];
    let updatedCategory = {};

    productData.forEach((category) => {
      if (category.categoryName === categoryName) {
        const updatedActivtyTypes = category.activityTypes.map((activity) =>
          activity.activityName === activityName
            ? { ...activity, activityName: editActivityNameInput }
            : activity
        );
        updatedCategory = { ...category, activityTypes: updatedActivtyTypes };
        updatedProductData = [...updatedProductData, updatedCategory];
      } else {
        updatedProductData = [...updatedProductData, category];
      }
      setProductData(updatedProductData);
      setIsEditModalOpen(false);
    });
  };

  return (
    <Portal>
      <div className="fixed inset-0 flex items-center justify-center bg-opacity-50 bg-gray-800 z-50">
        <div className="bg-white p-8 rounded-lg w-96">
          {/* <InputFields
          headerText={"Edit Activity Name"}
          value={editActivityNameInput}
          onChangeValue={setEditActivityNameInput}
        /> */}

          {/* originally InputFields resusable componenet above, was having trouble with the tolowercase.  */}
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-semibold mb-2">
              Edit Activity
            </label>
            <input
              type="text"
              className="w-full border  border-gray-300 px-3 py-2 rounded"
              value={editActivityNameInput}
              onChange={(e) => setEditActivityNameInput(e.target.value)}
              required
            />
          </div>

          <Button
            onClick={handleClick}
            onClose={() => {
              setIsEditModalOpen(false);
              setEditActivityNameInput(activityName);
            }}
            textValue={"Cancel"}
          />
        </div>
      </div>
    </Portal>
  );
}

export default EditModal;
