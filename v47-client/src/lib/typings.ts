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
