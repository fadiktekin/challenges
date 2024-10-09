import "./EntryForm.css";
import { Button } from "../Button";

export type FormDataType = {
  [k: string]: FormDataEntryValue;
};

export function EntryForm({
  onAddEntry,
}: {
  onAddEntry: (data: FormDataType) => void;
}) {
  function onFormSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const entries = new FormData(event.currentTarget);
    const data = Object.fromEntries(entries);
    onAddEntry(data);

    event.currentTarget.reset();
    event.currentTarget.elements.motto.focus();
  }

  return (
    <form className="form" onSubmit={onFormSubmit}>
      <input name="motto" type="text" />
      <textarea name="notes" id=""></textarea>
      <Button type="submit">Notes</Button>
    </form>
  );
}
