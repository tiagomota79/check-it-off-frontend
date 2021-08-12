interface ITask {
  id: string;
  text: string;
  active: boolean;
  listTitle: string;
  listId: string;
}

interface IList {
  id: string;
  title: string;
  description: string;
  active: boolean;
}

interface IListsState {
  lists: IList[];
}

interface ITasksState {
  tasks: ITask[];
}

interface IThemeState {
  theme: string;
}
