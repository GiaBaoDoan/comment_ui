import { CommentType } from "../index.ts";
import ModelComment from "./ModelComment.tsx";

const Comment = ({ comment }: { comment: CommentType }) => {
  const check = comment.replies && comment.replies.length > 0;
  return (
    <section>
      <ModelComment comment={comment} />
      {check && (
        <div className="my-5 pl-10 max-sm:pl-0">
          <div className="border-l-2 flex-col flex gap-5 pl-10 max-sm:pl-3">
            {comment.replies?.map((reply) => {
              return <ModelComment comment={reply} />;
            })}
          </div>
        </div>
      )}
    </section>
  );
};

export default Comment;
