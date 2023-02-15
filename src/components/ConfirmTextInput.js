import { v4 as uuid } from "uuid";

const ConfirmTextInput = props => {
  const { disabled, setDisabled, description, setDescription, setComments, rating, setRating, error, setError, id, setId } = props;

  const inputHandler = e => {
    const input = e.target.value;
    if (input !== "") {
      setDescription(input);
    }
    if (input.trim() === "") {
      setDisabled(true);
    } else if (input.trim().length < 10 || rating <= 0) {
      setError("La recensione deve essere lunga almeno 10 caratteri e deve avere un voto");
      setDisabled(true);
    } else {
      setError("");
      setDisabled(false);
    }
  };

  const handleConfirm = () => {
    if (id) {
      setComments(prev =>
        prev.map(comment => {
          if (comment.id === id) {
            return { ...comment, description, rating };
          } else {
            return comment;
          }
        })
      );
    } else {
      setComments(prev => [...prev, { id: uuid(), description, rating }]);
    }
    setRating(0);
    setDescription("");
    setDisabled(true);
    setId("");
  };

  return (
    <div className="w-full">
      <div>
        <div className={`flex justify-center items-center p-1 mt-4 rounded-md border-2 ${error ? "border-red-500" : "border-gray-100"}`}>
          <input
            type="text"
            value={description}
            className="w-full focus:outline-none border-none text-xl p-3"
            placeholder="scrivere una recensione qui"
            onChange={inputHandler}
            style={{ width: "100%", border: "none", fontSize: "1rem", padding: "5px" }}
          />

          <button
            className="border-none rounded-md px-2 py-2 cursor-pointer font-normal transition-all ease-in duration-100 bg-slate-300 disabled:cursor-default disabled:bg-slate-100 disabled:text-slate-500 hover:enabled:bg-dark-green hover:enabled:text-white"
            onClick={handleConfirm}
            disabled={disabled}>
            Conferma
          </button>
        </div>
      </div>
      <div className="text-red-500 font-semibold text-xs h-3 mt-2 text-center">{error}</div>
    </div>
  );
};

export default ConfirmTextInput;
