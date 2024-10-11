import { volumes } from "../../lib/data";
import { Volume } from "./Volume";

export default function TheReturnoftheKing() {
  const volumeData = volumes.find(
    (volume) => volume.slug === "the-return-of-the-king"
  );

  return <Volume volumeData={volumeData} />;
}
