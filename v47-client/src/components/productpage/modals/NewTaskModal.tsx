import { IoIosClose } from "react-icons/io";
import { TaskProps } from "../main/TaskList";
import FormContent from "./FormContent";

export interface TaskModalProps {
  taskProp: TaskProps;
  setIsTaskModalOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function NewTaskModal(props: TaskModalProps) {
  const { taskProp, setIsTaskModalOpen } = props;

  return (
    <div className="fixed px-12 mdpx-12 top-1/2  left-1/2 w-[110vw] h-[110vh] bg-black bg-opacity-60 z-50 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center">
      <MainContent
        taskProp={taskProp}
        setIsTaskModalOpen={setIsTaskModalOpen}
      />
    </div>
  );
}

const MainContent = (props: TaskModalProps) => {
  const { taskProp, setIsTaskModalOpen } = props;
  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="w-[500px] flex flex-col  space-y-4 rounded-md bg-white cursor-auto"
    >
      <CloseModalAndFormContent
        taskProp={taskProp}
        setIsTaskModalOpen={setIsTaskModalOpen}
      />
    </div>
  );
};

const CloseModalAndFormContent = (props: TaskModalProps) => {
  const { taskProp, setIsTaskModalOpen } = props;
  return (
    <div className="flex flex-col flex-1">
      <div className="p-4 pb-0 ml-auto">
        <IoIosClose
          onClick={() => setIsTaskModalOpen && setIsTaskModalOpen(false)}
          className="text-2xl duration-300 hover:scale-125 active:scale-90 cursor-pointer"
        />
      </div>
      <FormContent
        setIsTaskModalOpen={setIsTaskModalOpen}
        taskProp={taskProp}
      />
    </div>
  );
};
