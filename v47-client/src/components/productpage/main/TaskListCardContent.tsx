import { BsThreeDots } from "react-icons/bs";

interface TaskListCardContentProps {
  taskContentProps: {
    taskName: string;
    days: string;
    setIsMenuOpen: (value: boolean) => void;
    isMenuOpen: boolean;
  };
}

export default function TaskListCardContent(props: TaskListCardContentProps) {
  const { taskContentProps } = props;
  const handleButtonClick = (e: any) => {
    e.stopPropagation();
    taskContentProps.setIsMenuOpen(!taskContentProps.isMenuOpen);
  };
  return (
    <>
      <h1 className="text-sm  break-words">{taskContentProps.taskName}</h1>{" "}
      <h2 className="text-sm  break-words">
        Date Due: {taskContentProps.days}
      </h2>{" "}
      <div className="flex flex-1 duration-300  mt-auto justify-end items-end">
        <BsThreeDots
          onClick={(e) => handleButtonClick(e)}
          className="hover:scale-110 hover:text-gray-600 duration-300 cursor-pointer active:scale-75 "
        />
      </div>
    </>
  );
}
