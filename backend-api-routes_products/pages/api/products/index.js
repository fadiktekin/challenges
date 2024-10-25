import { getAllProducts } from "@/services/productServices";

export default function handler(request, response) {
  const result = getAllProducts();
  response.status(200).json(result);
}
