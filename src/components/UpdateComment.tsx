import { FormEvent, useState } from "react";
import { typeDispatch } from "..";
import { useStore } from "../hook/useStore";

const UpdateComment = ({
  id,
  setIsEdit,
}: {
  id: number;
  setIsEdit: (item: boolean) => void;
}) => {
  const { dispatch } = useStore();
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
        type: typeDispatch.updateComment,
      });
    setContent("");
    setIsEdit(false);
  };
  return (
    <div className="bg-white  flex items-start gap-5 rounded">
      <form
        onSubmit={handelClick}
        id="form-submit"
        className="flex flex-col items-start flex-1 gap-5"
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
          Update
        </button>
      </form>
    </div>
  );
};

export default UpdateComment;
