interface ITask {
  text: string;
  active: boolean;
  listTitle: string;
}

interface IList {
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
