import { TeamDataProps } from "../../../types/typings";

interface UserAvatarProps {
  image: string;
  name: string;
}
interface UserProfileLinksProps {
  name: string;
  linkedinLink: string;
  linkedInIcon: string;
  githubLink: string;
  githubIcon: string;
}

export default function MemberInfo(props: TeamDataProps) {
  const {
    content,
    githubLink,
    iconGithub,
    iconLinkedin,
    img,
    linkedinLink,
    name,
  } = props;
  return (
    <div className="flex justify-between flex-col px-5 mb-4 py-8 max-w-full md:max-w-[300px] md:mr-10 sm:mr-5 mr-0 my-1 duration-300 hover:-translate-y-3 bg-gray-100 dark:bg-black shadow-md hover:bg-gray-50 rounded-lg p-5 transition-all dark:hover:bg-white/[.075] dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
      <UserAvatar image={img} name={name} />
      <UserProfileLinks
        githubIcon={iconGithub}
        githubLink={githubLink}
        linkedInIcon={iconLinkedin}
        linkedinLink={linkedinLink}
        name={name}
      />
      <div className="border-b border-gray-300 w-full mt-2"></div>
      <UserContent content={content} />
    </div>
  );
}

const UserAvatar = (props: UserAvatarProps) => {
  const { image, name } = props;
  return (
    <div className="flex justify-center object-contain">
      <img
        src={image}
        alt={name}
        className="w-[150px] h-[150px] object-cover rounded-full"
      />
    </div>
  );
};

const UserContent = ({ content }: { content: string }) => {
  return (
    <div>
      <p className="font-normal text-center md:text-left text-wrap text-[18px] leading-[30.4px] text-gray-800 dark:text-gray-200 p-3">
        {content}
      </p>
    </div>
  );
};

const UserProfileLinks = (props: UserProfileLinksProps) => {
  const { githubIcon, githubLink, linkedInIcon, linkedinLink, name } = props;
  return (
    <div className="flex flex-row justify-center items-center mt-4">
      <h4 className="font-semibold gap-x-2 text-[25px] leading-[32px] text-gray-800 dark:text-gray-200 flex items-center">
        {name}
        <div className="flex items-center gap-x-1">
          <UserLink icon={linkedInIcon} linkTo={linkedinLink} />
          <UserLink icon={githubIcon} linkTo={githubLink} />
        </div>
      </h4>
    </div>
  );
};

const UserLink = ({ linkTo, icon }: { linkTo: string; icon: string }) => {
  return (
    <a href={linkTo} target="_blank" rel="noopener noreferrer">
      <img
        className="w-[20px] duration-300 hover:scale-125 active:scale-75 cursor-pointer h-[20px] ml-1"
        src={icon}
        alt="linkedin icon"
      />
    </a>
  );
};
