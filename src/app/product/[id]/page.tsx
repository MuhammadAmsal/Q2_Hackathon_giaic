import ProductDescription from "@/app/components/ProductDescription";
import ProductHd from "@/app/components/ProductHd";
import ProductDisplay from "@/app/components/ProductDisplay";
import img1 from "../../images/img16.png"
import img2 from "../../images/img4.png"
import img3 from "../../images/img11.png"
import img4 from "../../images/img18.png"
import img5 from "../../images/img17.png"
import img6 from "../../images/img13.png"
import img7 from "../../images/img6.png"
import img8 from "../../images/img14.png"
import img9 from "../../images/img16.png"
import img10 from "../../images/img4.png"
import img11 from "../../images/img11.png"
import img12 from "../../images/img6.png"
import { StaticImageData } from "next/image";
type Product = {
  id:number;
  image: StaticImageData;
  title: string;
  price: number;
};
const products=[
  {
      id:1,
      image:img1,
      title:"Asgaard Sofa",
      price:250000
  },
  {
      id:2,
      image:img2,
      title:"Granite dining table with dining chair",
      price:25000
  },
  {
      id:3,
      image:img3,
      title:"Reclaimed teak Sideboard",
      price:20000
  },
  {
      id:4,
      image:img4,
      title:"Kent Coffee Table",
      price:232000
  },
  {
      id:5,
      image:img5,
      title:"Maya sofa three seater",
      price:11000
  },
  {
      id:6,
      image:img6,
      title:"Reclaimed teak Sideboard",
      price:20000
  },
  {
      id:7,
      image:img7,
      title:"Plain console with teak mirror",
      price:50000
  },
  {
      id:8,
      image:img8,
      title:"Reclaimed teak coffee table",
      price:76000
  },
  {
      id:9,
      image:img9,
      title:"Outdoor sofa set",
      price:220000
  },
  {
      id:10,
      image:img10,
      title:"Round coffee table_color 2",
      price:10000
  },
  {
      id:11,
      image:img11,
      title:"Trenton Modular Sofa",
      price:25000
  },
  {
      id:12,
      image:img12,
      title:"Plain console with teak mirror",
      price:65000
  },
]


export default function Page({ params }: { params: { id: string } }) {
  const id = Number(params.id);
  const productData = products.find((e) => e.id === id);

  if (!productData) {
    return (
      <section className="mx-auto px-6 lg:px-20 py-28">
        <div>
          <h1 className="text-center text-2xl font-bold">Product Not Found</h1>
        </div>
      </section>
    );
  }

  return (
    <section className="mx-auto px-6 lg:px-20 py-28">
      <div>
        <ProductHd product={productData} />
        <ProductDisplay product={productData} />
        <ProductDescription />
      </div>
    </section>
  );
}
