interface IList {
  name: string;
  description: string;
  active: boolean;
}

interface IToDoLists {
  lists: IList[];
}
