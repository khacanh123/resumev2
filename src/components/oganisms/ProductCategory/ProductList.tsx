import ProductItem from "./ProductItem";
interface AppProps {
  productsList: any[];
}
export const ProductList = ({ productsList }: AppProps) => {
  console.log(productsList);

  return (
    <>
      <div>
        <ul
          className="grid grid-cols-3 gap-x-5 gap-y-[26px] 
      md:grid-cols-2
      md:gap-x-2"
          // @ts-ignore
          //   ref={parent}
        >
          {productsList.map((product: any) => (
            <ProductItem
              key={product.id}
              availability={product.availability}
              img={product.image.img1}
              name={product.name}
              price={product.price}
              discount={product.discount}
              love={product.love}
              brand={product.brand}
              id={product.id}
            />
          ))}
        </ul>
        {/* <div className="flex justify-center">
        <button onClick={previousPageHandler}>
          <AiOutlineLeft className="mt-11 mr-4 text-2xl" />
        </button>
        <ul className="flex items-center gap-4 mt-10">{renderPageNumbers}</ul>
        <button onClick={nextPageHandler}>
          <AiOutlineRight className="mt-11 ml-4 text-2xl" />
        </button>
      </div> */}
      </div>
    </>
  );
};
