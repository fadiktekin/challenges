import { ReactNode } from "react";
import { Button } from "../Button";

export function Tab({
  children,
  onClick,
}: {
  children: ReactNode;
  onClick: () => void;
}) {
  return (
    <Button onClick={onClick} type="button">
      {children}
    </Button>
  );
}
