import { ActionCount, indexType } from "../index.ts";

const countReducer = (state: indexType, action: ActionCount): any => {
  const { payload, type } = action;
  const cloneComments = [...state.comments];

  const newComment = {
    id: Date.now(),
    content: payload?.content || "",
    createdAt: "0s ago",
    replies: [],
    score: 0,
    user: { ...state.currentUser },
    replyingTo: "",
  };
  const index = cloneComments.findIndex((item) => item.id === payload.id);
  const findInReplies = () => {
    const results = cloneComments.map((d) => {
      const getData = d.replies?.filter((item) => item.id === payload.id);
      if (getData && getData?.length > 0) {
        return [d, getData[0]];
      }
    });
    return results.filter((result) => result !== undefined)[0] as any;
  };

  const returnStateComment = () => {
    localStorage.setItem(
      "state",
      JSON.stringify({ ...state, comments: cloneComments })
    );
    return {
      ...state,
      comments: cloneComments,
    };
  };
  switch (type) {
    // incre
    case "increment":
      if (cloneComments[index]) {
        cloneComments[index].score++;
      } else {
        findInReplies() && findInReplies()[1].score++;
      }

      return returnStateComment();
    case "decrement":
      if (cloneComments[index]) {
        cloneComments[index].score > 0 && cloneComments[index].score--;
      } else {
        findInReplies()[1].score--;
      }

      return returnStateComment();
    // decre
    case "removement":
      if (cloneComments[index]) {
        cloneComments.splice(index, 1);
      } else {
        const { replies } = findInReplies()[0];
        const { id } = findInReplies()[1];
        const index = replies?.findIndex((rep: any) => rep.id === id) as number;
        replies?.splice(index, 1);
      }

      return returnStateComment();
    case "addComment":
      cloneComments.push(newComment);
      return returnStateComment();
    case "updateComment":
      if (cloneComments[index]) {
        cloneComments[index].content = payload.content || "";
      } else {
        const { replies } = findInReplies()[0];
        const { id } = findInReplies()[1];
        const index = replies?.findIndex((rep: any) => rep.id === id) as number;
        if (replies && replies[index]) {
          replies[index].content = payload.content || "";
        }
      }
      return returnStateComment();
    case "replyComment":
      const newReply = {
        ...newComment,
        replyingTo: cloneComments[index].user.username,
      };
      cloneComments[index].replies?.push(newReply);
      return returnStateComment();
    default:
      return returnStateComment();
  }
};
export default countReducer;
