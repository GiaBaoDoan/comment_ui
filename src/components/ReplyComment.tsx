import React, { FormEvent, useState } from "react";
import { useStore } from "../hook/useStore";
import { typeDispatch } from "..";
const ReplyComment = ({
  id,
  setReply,
}: {
  id: number;
  setReply: (item: boolean) => void;
}) => {
  const { state, dispatch } = useStore();
  const [content, setContent] = useState<string>("");
  const handelClick = (e: FormEvent) => {
    e.preventDefault();
    if (!content) {
      return alert("Please add your comment");
    }
    dispatch &&
      dispatch({
        payload: {
          content,
          id,
        },
        type: typeDispatch.replyComment,
      });
    setContent("");
    setReply(false);
  };
  return (
    <div className="bg-white mt-5 p-5 flex items-start gap-5 rounded-lg">
      <img className="w-8" src={state.currentUser.image.png} alt="" />
      <form
        onSubmit={handelClick}
        id="form-submit"
        className="flex items-start flex-1 max-sm:flex-col gap-5"
        action=""
      >
        <textarea
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
            setContent(e.target.value)
          }
          value={content}
          placeholder="Reply comment..."
          className="border resize-none outline-none rounded-lg flex-1 w-full px-5 py-3"
        ></textarea>
        <button
          type="submit"
          className="bg-indigo-800 p-2 text-sm px-5 uppercase text-white rounded-lg"
        >
          Reply
        </button>
      </form>
    </div>
  );
};

export default ReplyComment;
