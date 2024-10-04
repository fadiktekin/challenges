import "./Button.css";

export function Button({
  children,
  type = "button",
}: {
  type: "button" | "submit" | "reset" | undefined;
}) {
  return (
    <button className="button" type={type}>
      {children}
    </button>
  );
}
