import React, { useState, useEffect } from "react";

function App() {
  const [widgets, setWidgets] = useState([]);

  useEffect(() => {
    // This useEffect is used to prevent the onDrop function from running on initial render
  }, []);

  function handleOnDrag(e, widgetType, currentIndex) {
    e.dataTransfer.setData("text/plain", JSON.stringify({ widgetType, currentIndex }));
  }

  function handleOnDrop(e, dropIndex) {
    e.preventDefault();

    const draggedData = JSON.parse(e.dataTransfer.getData("text/plain"));

    if (draggedData) {
      const newWidgets = [...widgets];
      const draggedWidgetType = draggedData.widgetType;
      const draggedWidgetIndex = draggedData.currentIndex;

      // Remove the dragged items from their original positions
      newWidgets.splice(draggedWidgetIndex, 1);

      // Check if the dragged item is already in the list
      const isDuplicated = newWidgets.includes(draggedWidgetType);

      // Insert the dragged item at the desired drop index if not duplicated
      if (!isDuplicated) {
        newWidgets.splice(dropIndex, 0, draggedWidgetType);
        setWidgets(newWidgets);
      }
    }
  }

  function handleDragOver(e) {
    e.preventDefault();
  }

  function handleRemoveWidget(index) {
    const newWidgets = widgets.slice();
    newWidgets.splice(index, 1);
    setWidgets(newWidgets);
  }

  function handleOnDragEnd() {
    setWidgets([...widgets]);
  }

  function handleAddWidget(widgetType) {
    const newWidgets = [widgetType, ...widgets];
    setWidgets(newWidgets);
  }

  return (
    <div className="flex-box items-center justify-center bg-gray-100">
        <div><h1 className="text-center text-gray-700 bold-200">Drag And Drop</h1></div>
      <div className="flex space-x-4">
  
        <div
          className="bg-blue-400 text-white p-4 rounded cursor-move"
          draggable
          onDragStart={(e) => handleOnDrag(e, "Your Task 1", 0)}
        >
          Your Task 1
        </div>
        <div
          className="bg-blue-400 text-white p-4 rounded cursor-move"
          draggable
          onDragStart={(e) => handleOnDrag(e, "Your Task 2", 1)}
        >
          Your task 2
        </div>
        <div
          className="bg-blue-400 text-white p-4 rounded cursor-move"
          draggable
          onDragStart={(e) => handleOnDrag(e, "Your Task 3", 2)}
        >
          Your task 3
        </div>
      </div>
      <div className="page bg-white p-8 border border-gray-300" onDrop={(e) => handleOnDrop(e, widgets.length)} onDragOver={handleDragOver}>
        <div className="dropped-items">
          {widgets.map((widget, index) => (
            <div
              key={index}
              className="component bg-gray-200 p-4 rounded mb-4 cursor-move"
              draggable
              onDragStart={(e) => handleOnDrag(e, widget, index)}
              onDrop={(e) => handleOnDrop(e, index)}
              onDragOver={handleDragOver}
              onDragEnd={handleOnDragEnd}
            >
              {widget}
              <button className="ml-2 text-red-500" onClick={() => handleRemoveWidget(index)}>
                Remove
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
