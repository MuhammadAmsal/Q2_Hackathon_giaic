import { TbArrowRight } from "react-icons/tb";
 
export default function ProductHeader({ product }) {
  
console.log(product)

  if (!product) {
    return (
      <div className="text-red-500">
        Product data is unavailable.
      </div>
    );
  }

  return (
    <nav aria-label="breadcrumb" className="my-4">
      <div className="flex items-center flex-wrap gap-x-2 text-gray-600 medium-16 capitalize">
        <span>Home</span>
        <TbArrowRight />
        <span>Shop</span>
        <TbArrowRight />
        <span>{product.title || "Unknown Product"}</span>
      </div>
    </nav>
  );
}
