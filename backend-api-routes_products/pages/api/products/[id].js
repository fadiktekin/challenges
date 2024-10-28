import { getProductById } from "@/services/productServices";

export default function handler(request, response) {
  const id = request.query.id;
  const product = getProductById(id);
  console.log("product", product);

  if (product) {
    return response.status(200).json(product);
  }
  response.status(404).json({ message: "Product not found" });
}
