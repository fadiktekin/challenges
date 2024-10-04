import "./EntryForm.css";
import { Button } from "../Button";

export function EntryForm() {
  function onFormSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const entries = new FormData(event.target);
    const data = Object.fromEntries(entries);

    console.log(data);
  }

  return (
    <form className="form" onSubmit={onFormSubmit}>
      <input name="motto" type="text" />
      <textarea name="notes" id=""></textarea>
      <Button type="submit">Notes</Button>
    </form>
  );
}
