import "./EntryForm.css";

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
      <button type="submit">Notes</button>
    </form>
  );
}
