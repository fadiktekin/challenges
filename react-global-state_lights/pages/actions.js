import Link from "../components/Link";
import QuickActions from "../components/QuickActions";

export default function Actions({ toggleAllOn, toggleAllOff, allOn, allOff }) {
  return (
    <>
      <Link href="/">← Back home</Link>
      <h1>Quick Actions</h1>
      <QuickActions
        toggleAllOn={toggleAllOn}
        toggleAllOff={toggleAllOff}
        allOn={allOn}
        allOff={allOff}
      />
    </>
  );
}
