import useSWR from "swr";
import { useRouter } from "next/router";
import { ProductCard } from "./Product.styled";
import { StyledLink } from "../Link/Link.styled";

export default function Product() {
  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading } = useSWR(`/api/products/${id}`);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return;
  }

  const { name, description, currency, price, reviews } = data;
  return (
    <ProductCard>
      <h2>{name}</h2>
      <p>Description: {description}</p>
      <p>
        Price: {price} {currency}
      </p>
      <StyledLink href="/">Back to all</StyledLink>
      {reviews.length > 0 && (
        <>
          <h2>Reviews</h2>
          <ul>
            {reviews.map(({ text, title, _id }) => (
              <li key={_id}>
                <h4>{title}</h4>
                <p>{text}</p>
              </li>
            ))}
          </ul>
        </>
      )}
    </ProductCard>
  );
}
