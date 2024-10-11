import Link from "next/link";
import Image from "next/image";

export function Volume({ volumeData }) {
  const { title, description, books, cover } = volumeData;
  return (
    <>
      <Link href="/volumes">← All Volumes</Link>
      <h1>{title}</h1>
      <p>{description}</p>
      <ul>
        {books.map(({ ordinal, title }) => (
          <li key={ordinal}>
            <p>
              {ordinal}: {title}
            </p>
          </li>
        ))}
      </ul>
      <Image src={`${cover}`} width={140} height={230} alt={title} />
    </>
  );
}
