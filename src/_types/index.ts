export type GroupSidesType = {
  id: number;
  columnType: string;
  name: string;
};

export type QuestionObjectType = {
  content: string;
  groupId: number;
  id: number;
  title: string;
};

export type FAQDataType = {
  groups: {
    left: GroupSidesType[];
    right: GroupSidesType[];
  };
  questions: QuestionObjectType[];
};
