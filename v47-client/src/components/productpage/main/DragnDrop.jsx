import React, { useState } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

// Define the draggable item
const DraggableItem = ({ id, text, index, moveItem }) => {
  const [, ref] = useDrag({
    type: 'ITEM',
    item: { id, index },
  });

  return (
    <div ref={ref} style={{ border: '1px solid black', padding: '8px', marginBottom: '4px' }}>
      {text}
    </div>
  );
};

// Define the drop zone
const DropZone = ({ items, moveItem }) => {
  const [, drop] = useDrop({
    accept: 'ITEM',
    hover: (draggedItem) => {
      if (draggedItem.index !== undefined) {
        moveItem(draggedItem.index, items.indexOf(draggedItem));
        draggedItem.index = items.indexOf(draggedItem);
      }
    },
  });

  return (
    <div ref={drop} style={{ border: '2px dashed black', padding: '16px' }}>
      {items.map((item, index) => (
        <DraggableItem key={item.id} id={item.id} text={item.text} index={index} moveItem={moveItem} />
      ))}
    </div>
  );
};

// Main App component
const DragAndDropApp = () => {
  const [items, setItems] = useState([
    { id: 1, text: 'Item 1' },
    { id: 2, text: 'Item 2' },
    { id: 3, text: 'Item 3' },
    { id: 4, text: 'Item 4'},
  ]);

  const moveItem = (fromIndex, toIndex) => {
    const newItems = [...items];
    const [movedItem] = newItems.splice(fromIndex, 1);
    newItems.splice(toIndex, 0, movedItem);
    setItems(newItems);
  };

  return (
    <div>
      <h2>Drag and Drop Example</h2>
      <DndProvider backend={HTML5Backend}>
        <DropZone items={items} moveItem={moveItem} />
      </DndProvider>
    </div>
  );
};

export default DragAndDropApp;
