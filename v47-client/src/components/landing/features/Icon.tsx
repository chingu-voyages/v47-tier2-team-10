import { Link } from "react-router-dom";
import { iconData } from "../../../data/IconData";

interface IconProps {
  headerText: string;
  subText: string;
}

export default function Icon(props: IconProps) {
  const { headerText, subText } = props;
  let iconSvg = getIconSvg(headerText);

  return (
    <Link
      className="group flex gap-y-6 w-full h-full  bg-gray-100 shadow-md hover:bg-gray-50 rounded-lg p-5 transition-all dark:hover:bg-white/[.075] dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
      to="/ProductPage"
    >
      {iconSvg}
      <div>
        <IconContent header={headerText} sub={subText} />
        <IconButton />
      </div>
    </Link>
  );
}

const IconContent = ({ header, sub }: { header: string; sub: string }) => {
  return (
    <div>
      <h3 className="block font-bold text-[#2d8630] text-[16px] dark:text-gray-500">
        {header}
      </h3>
      <p className="text-gray-600 dark:text-gray-400">{sub}</p>
    </div>
  );
};

const IconButton = () => {
  return (
    <p className="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold text-gray-800 dark:text-gray-500">
      Get organised
      <svg
        className="flex-shrink-0 w-4 h-4 transition ease-in-out group-hover:translate-x-1"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m9 18 6-6-6-6" />
      </svg>
    </p>
  );
};

const getIconSvg = (headerText: string): React.ReactNode | null => {
  switch (headerText) {
    case iconData[2].headerText:
      return (
        <svg
          className="flex-shrink-0 w-8 h-8 text-gray-800 mt-0.5 me-6 dark:text-gray-500"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="13.5" cy="6.5" r=".5" />
          <circle cx="17.5" cy="10.5" r=".5" />
          <circle cx="8.5" cy="7.5" r=".5" />
          <circle cx="6.5" cy="12.5" r=".5" />
          <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
        </svg>
      );
    case iconData[0].headerText:
      return (
        <svg
          className="flex-shrink-0 w-8 h-8 text-gray-800 mt-0.5 me-6 dark:text-gray-500"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M7 10v12" />
          <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" />
        </svg>
      );
    case iconData[1].headerText:
      return (
        <svg
          className="flex-shrink-0 w-8 h-8 text-gray-800 mt-0.5 me-6 dark:text-gray-500"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m7.5 4.27 9 5.15" />
          <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
          <path d="m3.3 7 8.7 5 8.7-5" />
          <path d="M12 22V12" />
        </svg>
      );
  }
};
