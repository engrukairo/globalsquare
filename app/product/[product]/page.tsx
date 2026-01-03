import Productdetails from "./productdetails";

export default async function Product({
  params,
}: {
  params: Promise<{ product: string }>;
}) {
  const { product } = await params;
  return (
    <div>
      <Productdetails product={product} />
    </div>
  );
}
