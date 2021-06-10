interface ITask {
  text: string;
  active: boolean;
  listIndex: number;
}

interface IList {
  name: string;
  description: string;
  active: boolean;
}

interface IListsState {
  lists: IList[];
}

interface ITasksState {
  tasks: ITask[];
}
