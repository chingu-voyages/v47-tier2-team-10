import React, { useState } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';


const DraggableItem = ({ id, content, index, moveItem }) => {
  const [, ref] = useDrag({
    type: 'ITEM',
    item: { id, index, content },
  });

  return (
    <div ref={ref} style={{ border: '1px solid black', padding: '8px', marginBottom: '4px' }}>
      {content}
    </div>
  );
};

const DropZone = ({ items, moveItem }) => {
  const [, drop] = useDrop({
    accept: ['ITEM', 'FILE'],
    drop: (item) => {
      if (item.type === 'ITEM') {
        moveItem(item.index, items.indexOf(item));
        item.index = items.indexOf(item);
      } else if (item.type === 'FILE') {
        // Handle file drop here (you can access the dropped file from item.file)
        console.log('Dropped file:', item.file);
      }
    },
  });

  return (
    <div ref={drop} style={{ border: '2px dashed black', padding: '16px' }}>
      {items.map((item, index) => (
        <DraggableItem key={item.id} id={item.id} content={item.content} index={index} moveItem={moveItem} />
      ))}
    </div>
  );
};

const DragAndDropApp = () => {
  const [items, setItems] = useState([
    { id: 1, content: 'Item 1' },
    { id: 2, content: 'Item 2' },
    { id: 3, content: 'Item 3' },
  ]);

  const moveItem = (fromIndex, toIndex) => {
    const newItems = [...items];
    const [movedItem] = newItems.splice(fromIndex, 1);
    newItems.splice(toIndex, 0, movedItem);
    setItems(newItems);
  };

  const handleFileDrop = (files) => {
    // Handle dropped files (you can perform further processing here)
    console.log('Dropped files:', files);

    // Example: Display file names
    alert(`Dropped files: ${files.map((file) => file.name).join(', ')}`);
  };

  return (
    <div>
      <h2>Drag and Drop </h2>
      <DndProvider backend={HTML5Backend}>
        <DropZone items={items} moveItem={moveItem} />
        <div style={{ marginTop: '20px', border: '2px dashed blue', padding: '16px' }}>
          <FileDropZone onDrop={handleFileDrop} />
        </div>
      </DndProvider>

    </div>
  );
};

const FileDropZone = ({ onDrop }) => {
  const [, drop] = useDrop({
    accept: 'FILE',
    drop: (item) => {
      onDrop(item.files);
    },
  });

  return (
    <div ref={drop} style={{ textAlign: 'center' }}>
      <p>Drop files here</p>
    </div>
  );
};

export default DragAndDropApp;
