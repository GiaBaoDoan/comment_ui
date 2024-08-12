import React, { FormEvent, useState } from "react";
import { useStore } from "../hook/useStore";
import { typeDispatch } from "..";
const WriteComment = () => {
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
        },
        type: typeDispatch.addComment,
      });
    setContent("");
  };
  return (
    <div className="bg-white p-5 flex items-start gap-5 rounded">
      <form
        onSubmit={handelClick}
        id="form-submit"
        className="flex items-start flex-1 max-sm:flex-col gap-5"
        action=""
      >
        <img
          className="w-8 max-sm:hidden"
          src={state.currentUser.image.png}
          alt=""
        />
        <textarea
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
            setContent(e.target.value)
          }
          value={content}
          placeholder="Add a comment"
          className="border resize-none outline-none rounded-lg flex-1 w-full px-5 py-3"
        ></textarea>
        <div className="max-sm:flex block items-center justify-between max-sm:w-full">
          <img
            className="w-8 sm:hidden"
            src={state.currentUser.image.png}
            alt=""
          />
          <button
            type="submit"
            className="bg-indigo-800 p-2 text-sm px-5 uppercase text-white rounded-lg"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default WriteComment;
