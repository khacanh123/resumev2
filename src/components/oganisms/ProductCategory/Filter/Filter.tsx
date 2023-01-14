import PriceRange from "./PriceRange";

export const Filter = (productsList: any) => {
  return (
    <div
      className={`sm:absolute sm:top-0 sm:left-[-200px] ${"sm:top-[420px] sm:left-0 sm:z-10 shadow-lg bg-white text-sm w-[230px]"}`}
    >
      <PriceRange />
      {/* <FilterStatus />
        <Checkboxs productsList={productsList} /> */}
    </div>
  );
};
