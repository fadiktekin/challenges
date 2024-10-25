import { useRouter } from "next/router";
import useSWR from "swr";
import { fetcher } from "./";

export default function Product() {
  const router = useRouter();
  const { id } = router.query;
  const { data, isLoading, error } = useSWR(`/api/products/${id}`, fetcher);

  if (error) return <div>Error occured ${error}</div>;
  if (isLoading) return <div>loading...</div>;

  const { name, description, category } = data;

  return (
    <div>
      <h1>{name}</h1>
      <p>{description}</p>
      <mark>{category}</mark>
    </div>
  );
}
