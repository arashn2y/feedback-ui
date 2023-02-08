import { Link, useNavigate } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

function Review() {
  const navigate = useNavigate();
  return (
    <div className="relative">
      <header className="w-full h-10vh flex justify-center items-center text-4xl font-bold text-white bg-dark-green">Feedback UI</header>
      <button
        className="absolute top-0 left-0 flex justify-center items-center w-10 h-10 bg-white rounded-full m-5 cursor-pointer"
        onClick={() => navigate(-1)}>
        <Link to="/review/1">
          <BsArrowLeft className="text-dark-green" />
        </Link>
      </button>
    </div>
  );
}

export default Review;
