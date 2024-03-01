// ! Product data types

export interface ProductData {
  categoryName: string;
  activityTypes: ActivityTypes[];
}
export interface ActivityTypes {
  activityName: string;
  Tasks: Tasks[];
}
export interface Tasks {
  taskName: string;
  taskDescription: string;
  days: string;
  column: string;
}

// data types

export interface FeedbackProps {
  id: string;
  content: string;
  name: string;
  title: string;
  img: string;
}

export interface TeamDataProps extends FeedbackProps {
  flag: string;
  iconGithub: string;
  iconLinkedin: string;
  githubLink: string;
  linkedinLink: string;
}

interface Links {
  name: string;
  link: string;
}

export interface footerLinksProps {
  title: string;
  links: Links;
}

export interface SocialMediaProps {
  id: string;
  icon: string;
  link: string;
}

export interface StatsDataProps {
  title: string;
  number: number;
  text: string;
}

export interface IconDataProps {
  headerText: string;
  subText: string;
}

// firebase

export interface FirebaseConfig {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
}


// user props

export interface UserDataProps {
  email: string;
  password: string;
  confirmPassword: string;
  username: string
}
