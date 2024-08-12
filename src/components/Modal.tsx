import { typeDispatch } from "..";
import { useStore } from "../hook/useStore";

const Modal = ({
  id,
  setModal,
}: {
  setModal: (item: boolean) => void;
  id: number;
}) => {
  const { dispatch } = useStore();
  return (
    <div className="bg-black/50 fixed top-0 left-0 w-full px-5 h-full flex items-center justify-center">
      <div className="bg-white p-8 max-w-[23rem] rounded-lg">
        <h3 className="uppercase text-gray-700 text-xl font-bold">
          deleted comment
        </h3>
        <p className="text-gray-500 mt-5">
          Are you sure want to delete this comment? This will remove this
          comment and can't be undone
        </p>
        <div className="flex justify-between gap-3">
          <button
            onClick={() => setModal(false)}
            className="uppercase p-3 flex-1 rounded mt-5 bg-slate-600 text-white"
          >
            no,cancel
          </button>
          <button
            onClick={() => {
              dispatch &&
                dispatch({
                  payload: {
                    id,
                  },
                  type: typeDispatch.removement,
                });
            }}
            className="uppercase p-3 flex-1 rounded text-white bg-red-400 mt-5"
          >
            yes,delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
