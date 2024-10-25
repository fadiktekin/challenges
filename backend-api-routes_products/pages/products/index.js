import useSWR from "swr";

export const fetcher = (...args) =>
  fetch(...args).then((result) => result.json());
export default function Products() {
  const { data, error, isLoading } = useSWR("/api/products", fetcher);

  if (error) return <div>Error occured {error}</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <ul>
      {data.map((product) => (
        <li key={product.id}>
          <div>
            <h1>{product.name}</h1>
            <p>{product.description}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
