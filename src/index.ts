export interface indexType {
  currentUser: User;
  comments: CommentType[];
}

export interface CommentType {
  id: number;
  content: string;
  createdAt: string;
  score: number;
  user: User;
  replies?: CommentType[];
  replyingTo?: string;
}

export interface User {
  image: Image;
  username: string;
}

export interface Image {
  png: string;
  webp: string;
}
export enum typeDispatch {
  decrement = "decrement",
  addComment = "addComment",
  increment = "increment",
  removement = "removement",
  updateComment = "updateComment",
  replyComment = "replyComment",
}
export interface ActionCount {
  type: typeDispatch;
  payload: {
    id?: number;
    content?: string;
  };
}
