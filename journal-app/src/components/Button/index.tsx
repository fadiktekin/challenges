import { ReactNode } from "react";
import "./Button.css";

export function Button({
  onClick,
  children,
  type = "button",
}: {
  onClick: () => void;
  children: ReactNode;
  type: "button" | "submit" | "reset" | undefined;
}) {
  return (
    <button onClick={onClick} className="button" type={type}>
      {children}
    </button>
  );
}
