import { volumes } from "../../lib/data";
import { Volume } from "./Volume";

export default function TheTwoTowers() {
  const volumeData = volumes.find((volume) => volume.slug === "the-two-towers");

  return <Volume volumeData={volumeData} />;
}
