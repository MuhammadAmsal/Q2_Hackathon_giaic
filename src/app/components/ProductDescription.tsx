export default function ProductDescription() {
    return (
      <div className="mt-20" >
        <div className="flex gap-3 mb-4" >
          <button className="medium-15 border border-green-90 bg-black px-7   text-white transition-all rounded-none !text-xs !py-[6px] w-36">
            Description
          </button>
          <button className="medium-15 border border-green-90 bg-transparent px-7 text-green-90 transition-all hover:bg-black hover:text-white  rounded-none !text-xs !py-[6px] w-36">
            Additional Information 
          </button>
          <button className="medium-15 border border-green-90 bg-transparent px-7  text-green-90 transition-all hover:bg-black hover:text-white rounded-none !text-xs !py-[6px] w-36">
            Reviews
          </button>
        </div>
        <div className="flex flex-col pb-16" >
          <p className="text-sm" >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book
          </p>
          <p className="text-sm" >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book
          </p>
        </div>
      </div>
    );
  }
  
