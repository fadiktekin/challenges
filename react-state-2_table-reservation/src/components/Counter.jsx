import "./Counter.css";

export default function Counter({ setPeople }) {
  return (
    <>
      <h2>How many people would you like to visit us with?</h2>
      <div className="counter__buttons-container">
        <button
          type="button"
          className="counter__button"
          aria-label="increment people count"
          onClick={() => setPeople((people) => people + 1)}
        >
          +
        </button>
        <button
          type="button"
          className="counter__button"
          aria-label="decrement people count"
          onClick={() =>
            setPeople((people) => (people > 0 ? people - 1 : people))
          }
        >
          -
        </button>
      </div>
    </>
  );
}
