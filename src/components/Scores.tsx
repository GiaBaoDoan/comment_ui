import { useStore } from "../hook/useStore";

const Scores = ({ scores, id }: { scores: number; id: number }) => {
  const { dispatch } = useStore();
  const handelCount = (type: any) => {
    return (
      dispatch &&
      dispatch({
        payload: {
          id,
        },
        type,
      })
    );
  };
  return (
    <div className="bg-slate-50 flex-col flex items-center max-sm:flex-row gap-5 rounded-lg py-3 px-4 max-sm:py-2 max-sm:px-3">
      <button onClick={() => handelCount("increment")}>
        <img src="/images/icon-plus.svg" alt="" />
      </button>
      <span className="text-indigo-700 font-bold">{scores}</span>
      <button onClick={() => handelCount("decrement")}>
        <img src="/images/icon-minus.svg" alt="" />
      </button>
    </div>
  );
};

export default Scores;
