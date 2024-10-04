import "./Entry.css";
import star from "../../assets/resources/star.svg";

export function Entry() {
  const now = new Date().toISOString();

  return (
    <article>
      <time dateTime={now}>{now}</time>
      <div className="title-icon">
        <h3>“That’s life in the city“</h3>
        <img src={star} alt="" srcset="" />
      </div>
      <p>
        Si sine causa? quae fuerit causa, mox videro; interea hoc tenebo, si
        mihi. Et quidem se repellere, idque instituit docere sic omne animal,
        simul atque.
      </p>
    </article>
  );
}
