import React, { ReactNode } from "react";

interface Props {
  content: string;
  renderTasksByColumn: (value: string) => ReactNode;
}

export default function MainContentColumn(props: Props) {
  const { content, renderTasksByColumn } = props;
  return (
    <div className="flex-1 flex flex-col w-[320px]">
      <div className="flex items-center gap-x-2 mb-4">
        <HandleDotColumn content={content} />
        <h2 className="text-[#828fa3] uppercase ">{content}</h2>
      </div>
      {renderTasksByColumn(content)}
    </div>
  );
}

const HandleDotColumn = (props: { content: string }) => {
  switch (props.content) {
    case "Not Started":
      return <div className="bg-[#49c4e5] w-3 rounded-full h-3"></div>;
    case "In Progress":
      return <div className="bg-[#8471f2] w-3 rounded-full h-3"></div>;
    case "Done":
      return <div className="bg-[#67E2AE] w-3 rounded-full h-3"></div>;
  }
};
