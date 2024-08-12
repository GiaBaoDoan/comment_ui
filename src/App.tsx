import "./App.css";
import Comment from "./components/Comment";
import { useStore } from "./hook/useStore";
import WriteComment from "./components/WriteComment";

function App() {
  // hook
  const { state } = useStore();
  return (
    <div className="bg-slate-100  min-h-screen flex items-center justify-center">
      <div className="container py-10 flex flex-col max-width gap-5">
        {state?.comments?.map((comment) => {
          return <Comment comment={comment} />;
        })}
        <WriteComment />
      </div>
    </div>
  );
}

export default App;
