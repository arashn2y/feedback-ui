import { useState } from "react";
import Button from "../components/Button";
import ConfirmTextInput from "../components/ConfirmTextInput";
import { AiOutlineDelete } from "react-icons/ai";
import { FiEdit2 } from "react-icons/fi";
import { BsInfoLg } from "react-icons/bs";
import { Link } from "react-router-dom";

function Dashboard() {
  const [id, setId] = useState(0);
  const [vote, setVote] = useState(0);
  const [review, setReview] = useState('');
  const [comments, setComments] = useState([]);
  const [disabled, setDisabled] = useState(true);
  const [error, setError] = useState('');

  const handleButton = (value) => {
    setVote(value);
    if(value > 0 && review.trim() !== '' && review.trim().length >= 10) {
      setError('');
      setDisabled(false);
    }
  };

  return (
    <div className="relative">
      <header className="w-full h-10vh flex justify-center items-center text-4xl font-bold text-white bg-dark-green">Feedback UI</header>
      <main className="w-full flex flex-col justify-center items-center relative">
        <div className="w-full flex justify-center items-center p-1">
          <div
            className="w-2/5 flex flex-col p-8 mt-10 mb-5 border-2 border-gray-100 rounded-sm"
            style={{ boxShadow: "14px 5px 70px 6px rgba(0,0,0,0.1)" }}>
            <div>
              <h2 className="font-medium font-Itim text-3xl my-4 text-center">Come descriverebbe la sua esperienza?</h2>
              <div className="flex justify-between my-4">
                {[...Array(10)].map((e, i) => {
                  const baseStyle = "border-2 border-transparent mx-1 rounded-50 w-8 h-8 cursor-pointer transition-all ease-in duration-150";
                  return (
                    <Button
                      key={i}
                      className={`${baseStyle} ${
                        vote === 0 ? " bg-slate-300 hover:bg-dark-green" : vote === i + 1 ? ` bg-dark-green` : " bg-slate-100 hover:bg-dark-green"
                      }`}
                      onClick={handleButton}>
                      {i + 1}
                    </Button>
                  );
                })}
              </div>
              <ConfirmTextInput
                setComments={setComments}
                setReview={setReview}
                review={review}
                setDisabled={setDisabled}
                disabled={disabled}
                vote={vote}
                setVote={setVote}
                setError={setError}
                error={error}
                id={id}
                setId={setId}
              />
            </div>
          </div>
        </div>
        <div className="w-2/5 flex flex-col justify-center items-center">
          <div className="w-full flex justify-between items-center px-1">
            <h2 className="font-medium font-Itim text-lg my-2 text-center">
              {comments.length > 0 ? comments.length : 0} Recension{comments.length > 1 ? "i" : "e"}
            </h2>
            <p className="font-medium font-Itim text-lg my-2 text-center">
              Voto medio: {comments.length > 0 ? (comments.reduce((acc, curr) => acc + curr.vote, 0) / comments.length).toFixed(2) : 0}
            </p>
          </div>
          {comments.map((comment, i) => (
            <div
              key={comment.id}
              className="w-full flex flex-col p-8 my-1 border-2 border-gray-100 rounded-sm relative tansition-all ease-in duration-700"
              style={{ boxShadow: "14px 5px 70px 6px rgba(0,0,0,0.1)" }}>
              <div className="absolute flex justify-center items-center -top-3 -right-3 rounded-50 w-8 h-8 bg-dark-green bg-opacity-60">
                {comment.vote}
              </div>
              <p className="text-xl font-medium">{comment.review}</p>
              <button
                className="absolute flex justify-center items-center bottom-0 right-2 w-8 h-8 text-red-500 bg-opacity-60 cursor-pointer"
                onClick={() => setComments(prevState => prevState.filter(prevComment => prevComment.id !== comment.id))}>
                <AiOutlineDelete />
              </button>
              <button
                className="absolute flex justify-center items-center bottom-0 right-7 w-8 h-8 text-dark-green bg-opacity-60 cursor-pointer"
                onClick={() => {
                  setReview(comment.review);
                  setVote(comment.vote);
                  setId(comment.id);
                }}>
                <FiEdit2 />
              </button>
            </div>
          ))}
        </div>
      </main>
      <div className="absolute top-0 right-0 flex justify-center items-center w-10 h-10 bg-white rounded-full m-5 cursor-pointer">
        <Link to="/review/1">
          <BsInfoLg className="text-dark-green" />
        </Link>
      </div>
    </div>
  );
}

export default Dashboard;
