import { CommentType, typeDispatch } from "../index.ts";
import { useStore } from "../hook/useStore";
import Modal from "./Modal.tsx";
import { useState } from "react";

const Action = ({
  comment,
  handelEdit,
  handelReply,
}: {
  comment: CommentType;
  handelEdit: () => void;
  handelReply: () => void;
}) => {
  const { state } = useStore();
  const checkUser = state.currentUser?.username === comment.user.username;
  const [isModal, setModal] = useState<boolean>(false);
  return (
    <div>
      {checkUser ? (
        <div className="flex gap-3">
          <button
            onClick={() => setModal(true)}
            className="flex items-center gap-3"
          >
            <img src="/images/icon-delete.svg" alt="" />
            <span className="text-red-400 font-bold">Delete</span>
          </button>
          <button
            onClick={() => handelEdit()}
            className="flex items-center gap-3"
          >
            <img src="/images/icon-edit.svg" alt="" />
            <span className="text-indigo-700 font-bold">Edit</span>
          </button>
        </div>
      ) : (
        comment.replies && (
          <button
            onClick={() => handelReply()}
            className="flex items-center gap-3"
          >
            <img src="/images/icon-reply.svg" alt="" />
            <span className="font-bold text-indigo-700">Reply</span>
          </button>
        )
      )}
      {isModal && <Modal setModal={setModal} id={comment?.id} />}
    </div>
  );
};

export default Action;
