import { CommentType } from "../index.ts";
import Scores from "./Scores.tsx";
import { useStore } from "../hook/useStore.tsx";
import { useState } from "react";
import ReplyComment from "./ReplyComment.tsx";
import UpdateComment from "./UpdateComment.tsx";
import Action from "./Action.tsx";

const ModelComment = ({ comment }: { comment: CommentType }) => {
  const { state } = useStore();
  const checkUser = state.currentUser?.username === comment.user.username;
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [reply, setReply] = useState<boolean>(false);
  const handelEdit = () => setIsEdit(!isEdit);
  const handelReply = () => setReply(!reply);
  return (
    <div>
      <div className="flex gap-5 bg-white p-5 rounded-lg  items-start">
        <div className="max-sm:hidden">
          <Scores id={comment.id} scores={comment.score} />
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-3">
              <img className="w-8" src={comment.user.image.webp} alt="" />
              <span className="text-indigo-900 font-bold">
                {comment.user.username}
              </span>
              {checkUser && (
                <span className="bg-indigo-600 p-[2px] px-2 text-white text-xs">
                  you
                </span>
              )}
              <span className="text-gray-500 font-medium">
                {comment.createdAt}
              </span>
            </div>
            <div className="max-sm:hidden">
              <Action
                comment={comment}
                handelEdit={handelEdit}
                handelReply={handelReply}
              />
            </div>
          </div>
          {isEdit ? (
            <UpdateComment id={comment?.id} setIsEdit={setIsEdit} />
          ) : (
            <div className="flex-col items-start flex">
              <p className="text-gray-500 font-medium">
                {comment.replyingTo && (
                  <span className="text-indigo-700 font-bold">
                    @{comment.replyingTo}
                  </span>
                )}
                <span className="ml-1">{comment.content}</span>
              </p>
              <div className="sm:hidden mt-5 w-full flex items-center justify-between">
                <Scores id={comment.id} scores={comment.score} />
                <Action
                  comment={comment}
                  handelEdit={handelEdit}
                  handelReply={handelReply}
                />
              </div>
            </div>
          )}
        </div>
      </div>
      {reply && <ReplyComment setReply={setReply} id={comment?.id} />}
    </div>
  );
};

export default ModelComment;
