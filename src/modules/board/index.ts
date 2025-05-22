export type TSortDirection = 'asc' | 'desc';

export type TTextInputProps = {
  label: string;
  error: boolean;
  type: string;
};

export type TRowProps = {
  title: string;
  description: string;
  status: string;
  dueDate: string;
  id: string;
};
