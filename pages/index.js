import Carousel from "../components/homePage/Carousel";
import BrandsCard from "../components/homePage/BrandsCard";
import PopProducts from "../components/homePage/PopProducts";

export default function Home({ brands, products }) {
  return (
    <div>
      <div className="divider" />
      <Carousel />
      <div className="divider" />
      <BrandsCard brands={brands} />
      <div className="divider" />
      <PopProducts products={products} />
    </div>
  );
}

//retrieve data from data.js api
export const getStaticProps = async () => {
  const res1 = await fetch(`http://localhost:3000/api/brands`);
  const res2 = await fetch(`http://localhost:3000/api/products`);
  const brands = await res1.json();
  const products = await res2.json();

  return {
    props: {
      brands,
      products,
    },
  };
};
