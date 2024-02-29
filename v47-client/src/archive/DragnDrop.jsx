import React, { useState, useEffect,useContext } from "react";
// import FilteredDataContext from "../../../context/FilteredDataContext";

function DragnDrop() {
  const [widgets, setWidgets] = useState([]);

  useEffect(() => {
    // This useEffect is used to prevent the onDrop function from running on initial render
  }, []);

  const jsonData = 
    [
      {
        "categoryName": "ROUTINE ACTIVITIES",
        "activityTypes": [
          {
            "activityName": "Projects",
            "Tasks": [
              {
                "taskName": "Update Recipes Project Backlog",
                "taskDescription": "Update the project backlog tasks",
                "days": "2024-02-17",
                "column": "Not Started"
              },
              {
                "taskName": "Update Recipes Project Backlog",
                "taskDescription": "Update the project backlog tasks",
                "days": "2024-02-17",
                "column": "Not Started"
              },
              {
                "taskName": "Update Recipes Project Backlog",
                "taskDescription": "Update the project backlog tasks",
                "days": "2024-02-17",
                "column": "Not Started"
              },
              {
                "taskName": "Update Recipes Project Backlog",
                "taskDescription": "Update the project backlog tasks",
                "days": "2024-02-17",
                "column": "Not Started"
              },
              {
                "taskName": "Update Recipes Project Backlog",
                "taskDescription": "Update the project backlog tasks",
                "days": "2024-02-17",
                "column": "Not Started"
              },
              {
                "taskName": "Update Recipes Project Backlog",
                "taskDescription": "Update the project backlog tasks",
                "days": "2024-02-17",
                "column": "Not Started"
              },
              {
                "taskName": "Update The dailyTasks sheet with the backlog tasks",
                "taskDescription": "add the filtering feature to Done",
                "days": "2024-02-17",
                "column": "In Progress"
              },
    
              {
                "taskName": "Study The First Node Js Lecture",
                "taskDescription": "",
                "days": "2024-02-17",
                "column": "Done"
              },
    
              {
                "taskName": "Study The First Node Js Lecture",
                "taskDescription": "",
                "days": "2024-02-17",
                "column": "Done"
              },
    
              {
                "taskName": "Study The First Node Js Lecture",
                "taskDescription": "",
                "days": "2024-02-17",
                "column": "Done"
              },
    
              {
                "taskName": "Study The First Node Js Lecture",
                "taskDescription": "",
                "days": "2024-02-17",
                "column": "Done"
              },
              {
                "taskName": "Study The First Node Js Lecture",
                "taskDescription": "",
                "days": "2024-02-17",
                "column": "Done"
              },
              {
                "taskName": "Update Recipes Project Backlog",
                "taskDescription": "Update the project backlog tasks",
                "days": "2024-02-17",
                "column": "Not Started"
              },
              {
                "taskName": "Update Recipes Project Backlog",
                "taskDescription": "Update the project backlog tasks",
                "days": "2024-02-17",
                "column": "Not Started"
              },
              {
                "taskName": "Update The dailyTasks sheet with the backlog tasks",
                "taskDescription": "add the filtering feature to Done",
                "days": "2024-02-17",
                "column": "In Progress"
              },
              {
                "taskName": "Update The dailyTasks sheet with the backlog tasks",
                "taskDescription": "add the filtering feature to Done",
                "days": "2024-02-17",
                "column": "In Progress"
              },
              {
                "taskName": "Update Recipes Project Backlog",
                "taskDescription": "Update the project backlog tasks",
                "days": "2024-02-17",
                "column": "Not Started"
              },
              {
                "taskName": "Update The dailyTasks sheet with the backlog tasks",
                "taskDescription": "add the filtering feature to Done",
                "days": "2024-02-17",
                "column": "In Progress"
              }
            ]
          },
          {
            "activityName": "Blog Posts",
            "Tasks": [
              {
                "taskName": "Publish The recent Blog Post Draft to hashnode",
                "taskDescription": "Publish the latest blog post",
                "days": "2024-02-17",
                "column": "Done"
              },
              {
                "taskName": "Write a New headline in a Blog Post Draft",
                "taskDescription": "Write a catchy headline for a new blog post",
                "days": "2024-02-17",
                "column": "Not Started"
              }
            ]
          }
        ]
      },
      {
        "categoryName": "STUDYING",
        "activityTypes": [
          {
            "activityName": "Node Js Course",
            "Tasks": [
              {
                "taskName": "Plan The Node Js Course Progress By Month",
                "taskDescription": "Set Up A Plan For The Next Month Of Node Js Learning",
                "days": "2024-02-17",
                "column": "In Progress"
              },
    
              {
                "taskName": "Study The First Node Js Lecture",
                "taskDescription": "",
                "days": "2024-02-17",
                "column": "Done"
              }
            ]
          },
          {
            "activityName": "MongoDB",
            "Tasks": [
              {
                "taskName": "Plan The MongoDB Course Progress By Month",
                "taskDescription": "Set Up A Plan For The Next Month Of Node Js Learning",
                "days": "2024-02-17",
                "column": "Not Started"
              },
              {
                "taskName": "Study The First MongoDB Lecture",
                "taskDescription": "",
                "days": "2024-02-17",
                "column": "Not Started"
              }
            ]
          }
        ]
      },
      {
        "categoryName": "DAILY TASKS PROJECT",
        "activityTypes": [
          {
            "activityName": "Backlog",
            "Tasks": [
              {
                "taskName": "Add The New Features list",
                "taskDescription": "",
                "days": "2024-02-17",
                "column": "In Progress"
              },
              {
                "taskName": "Add The New PRs To InReview",
                "taskDescription": "",
                "days": "2024-02-17",
                "column": "In Progress"
              }
            ]
          },
          {
            "activityName": "Coding",
            "Tasks": [
              {
                "taskName": "Work On The Sidebar",
                "taskDescription": "Add The Sections Links",
                "days": "2024-02-17",
                "column": "Not Started"
              },
              {
                "taskName": "Refactor The Filtering Feature Code",
                "taskDescription": "",
                "days": "2024-02-17",
                "column": "Done"
              }
            ]
          }
        ]
      },
      {
        "categoryName": "CHINGU",
        "activityTypes": [
          {
            "activityName": "Voyage",
            "Tasks": [
              {
                "taskName": "Conduct The Project Planning Meeting",
                "taskDescription": "Conduct The Project Planning Meeting To Discuss Our Ideas",
                "days": "2024-02-17",
                "column": "Done"
              },
              {
                "taskName": "Create The UI/UX Design For The DailyTasks Project",
                "taskDescription": "Create The UI/UX Design For The DailyTasks Project Based On The Team Discussion",
                "days": "2024-02-17",
                "column": "Not Started"
              }
            ]
          },
          {
            "activityName": "Pair Programming",
            "Tasks": [
              {
                "taskName": "Create When2Meet Link",
                "taskDescription": "Create When2Meet Link To Introduce Yourselves",
                "days": "2024-02-17",
                "column": "In Progress"
              },
              {
                "taskName": "Attend The Introduction Meeting With Someone",
                "taskDescription": "",
                "days": "2024-02-17",
                "column": "Done"
              }
            ]
          }
        ]
      }
    
    
  ];

  // const {filteredData, setFiltered} = useContext(FilteredDataContext)
  // const { filteredData, setFilteredData } = useContext(FilteredDataContext);

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
      <div>
        <h1 className="text-center text-gray-700 bold-200">Drag And Drop</h1>
      </div>
      <div className="flex space-x-4">
        {jsonData.map((category, categoryIndex) => (
          <div key={categoryIndex}>
            {category.activityTypes.map((activity, activityIndex) => (
              <div key={activityIndex}>
                {activity.Tasks.map((task, taskIndex) => (
                  <div
                    key={taskIndex}
                    className="bg-blue-400 text-white p-4 rounded cursor-move"
                    draggable
                    onDragStart={(e) => handleOnDrag(e, task.taskName, taskIndex)}
                  >
                    {task.taskName}
                  </div>
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>
      <div
        className="page bg-white p-8 border border-gray-300"
        onDrop={(e) => handleOnDrop(e, widgets.length)}
        onDragOver={handleDragOver}
      >
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

export default DragnDrop;
