import React, { useState, useContext } from 'react';
import Portal from "../Portal/Portal"
import { productDataContext } from '../../../../context/ProductDataContext';
 
function AddNewActivity({ setIsNewActivityModalOpen, categoryName }) {

  const [activityName, setActivityName] = useState('');
  const [validation, setValidation] = useState('');

  const {setProductData, productData} = useContext(productDataContext)
 
  const handleSubmit = () => {
    if(!activityName)  return setValidation(true)

    const newActivity = {
      activityName,
      Tasks: []
    }
    
    let updatedProductData = []

    productData.forEach(item => {
      if(item.categoryName === categoryName) {
        let updatedCategory = {}
        const updatedActivtyTypes = [...item.activityTypes, newActivity]
        updatedCategory = {...item, activityTypes: updatedActivtyTypes}
        updatedProductData = [...updatedProductData, updatedCategory]
      } else {
        updatedProductData = [...updatedProductData, item]
      }

      setProductData(updatedProductData)
      setIsNewActivityModalOpen(false)
    })
  };


  return (
    <Portal>
    <div className="fixed inset-0 flex items-center justify-center bg-opacity-50 bg-gray-800 z-50">
      <div className="bg-white p-8 rounded-lg w-96">
          <div className="mb-6">
            <label htmlFor="activityName" className="block text-gray-700 text-sm font-semibold mb-2">
              Add New Activity
            </label>
            <input
              type="text"
              id="activityName"
              className="w-full border border-gray-300 px-3 py-2 rounded"
              value={activityName}
              onChange={(e) => setActivityName(e.target.value)}
            />
            <p className={`text-red-500 text-sm ${validation ? 'flex' : 'hidden'}`}>Please fill in new activity</p>
          </div>
          <div className="flex justify-between">
            <button
              className="bg-gray-300 text-gray-700 px-8 py-2 rounded"
              onClick={() => setIsNewActivityModalOpen(false)}
            >
              Cancel
            </button>
            <button
              className="bg-green-500 text-white px-10 py-2 rounded"
              onClick={handleSubmit}
            >
              Add
            </button>
          </div>
      </div>
    </div>
    </Portal>
  );
}

export default AddNewActivity;
