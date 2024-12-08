import { MdStar } from "react-icons/md";
import Image from "next/image";
 
import { StaticImageData } from "next/image";
type Product = {
  image: StaticImageData;
  title: string;
  price: number;
};

function ProductDisplay({ product }: { product: Product }) {
  if (!product) {
    return (
      <div>
        <h1>Product not found!</h1>
      </div>
    );
  }

  return (
    <section>
      <div className="flex flex-col gap-14 xl:flex-row">
        {/* Left Side */}
        <div className="flex gap-x-2 xl:flex-1">
          <div className="flex flex-col gap-[7px] flex-wrap">
            <Image src={product.image}  alt="Thumbnail 1" width={99} height={99} />
            <Image src={product.image}  alt="Thumbnail 2" width={99} height={99} />
            <Image src={product.image} alt="Thumbnail 3" width={99} height={99} />
            <Image src={product.image}  alt="Thumbnail 4" width={99} height={99} />
          </div>
          <div>
            <Image src={product.image} alt={`Image of ${product.title}`} width={500} height={500} />
          </div>
        </div>
        {/* Right Side */}
        <div className="flex-col flex xl xl:flex-[1.7]">
          <h3 className="text-[32px] leading-tight md:text-[36px] md:leading-[1.3] mb-4 font-semibold">{product.title}</h3>
          <div className="flex gap-x-2 text-secondary medium-22">
            <MdStar />
            <MdStar />
            <MdStar />
            <MdStar />
            <p>(111)</p>
          </div>
          <div className="flex gap-x-6 medium-20 my-4">
            <div className="line-through">{product.price}</div>
            <div className="text-secondary">{product.price}</div>
          </div>
          <div className="mb-4">
            <h4 className="bold-16">Select Size:</h4>
            <div className="flex gap-3 my-3">
              <div className="ring-2 ring-slate-900 h-10 w-10 flex items-center justify-center cursor-pointer">S</div>
              <div className="ring-2 ring-slate-900/10 h-10 w-10 flex items-center justify-center cursor-pointer">M</div>
              <div className="ring-2 ring-slate-900/10 h-10 w-10 flex items-center justify-center cursor-pointer">L</div>
              <div className="ring-2 ring-slate-900/10 h-10 w-10 flex items-center justify-center cursor-pointer">XL</div>
            </div>
            <div className="flex flex-row gap-y-3 mb-4 max-w-[555px] mt-5">
                <div className="border p-3 rounded-md  border-black my-auto font-medium cursor-pointer" >-  3  +</div>
              <button className="medium-15 ml-4 border border-black bg-transparent px-7 py-3 text-black transition-all hover:bg-black hover:text-white rounded-md uppercase regular-14 tracking-widest">
                Add to Cart
              </button>
             
            </div>
            <p>
              <span className="medium-16 text-tertiary">Category :</span> Home | Shop | Category
            </p>
            <p>
              <span className="medium-16 text-tertiary">Tags :</span> Chairs | Desk
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDisplay;
