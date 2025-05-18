export type TTaskStatus = 'pending' | 'inProgress' | 'done';

export type TTask = {
  id: string;
  title: string;
  description: string;
  status: TTaskStatus;
  dueDate: string;
};

export type TSortDirection = 'asc' | 'desc';

/* PROPS TYPES */
export type THeaderProps = {
  title: string;
};

export type TTextInputProps = {
  label: string;
  error: boolean;
  type: string;
};

export type TActionsProps = {
  showTable: boolean;
};

export type TListHeaderProps = {
  listName: string;
};

export type TCardProps = {
  title: string;
  description: string;
  dueDate: string;
  id: string;
};

export type TRowProps = {
  title: string;
  description: string;
  status: string;
  dueDate: string;
  id: string;
};
