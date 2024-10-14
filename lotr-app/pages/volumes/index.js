import { useRouter } from "next/router";
import { introduction, volumes } from "../../lib/data";
import Link from "next/link";

export default function Volumes() {
  const router = useRouter();

  function navigateToRandomPage() {
    const randomElement = volumes[Math.floor(Math.random() * volumes.length)];
    router.push(`volumes/${randomElement.slug}`);
  }
  return (
    <>
      <h1>Lord of the Rings</h1>
      <p>{introduction}</p>
      <h2>All Volumes</h2>
      <ul>
        {volumes.map((volume) => (
          <li key={volume.slug}>
            <Link href={`/volumes/${volume.slug}`}>{volume.title}</Link>
          </li>
        ))}
      </ul>
      <button type="button" onClick={navigateToRandomPage}>
        Random Volume
      </button>
    </>
  );
}
