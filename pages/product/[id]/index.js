import BreadcrumbBar from "../../../components/productPage/Breadcrumb";
import Meta from "../../../components/Head";
import ProductCtn from "../../../components/productPage/ProductCtn";
import CartCtn from "../../../components/productPage/CartCtn";

const product = ({ product }) => {
  return (
    <>
      <Meta title={product.name} />
      <BreadcrumbBar name={product.name} />
      <div className="divider" />
      <div className="pageMaxWidth">
        <div className="row" style={{ alignItems: "flex-start" }}>
          <ProductCtn product={product} />
          <CartCtn product={product} />
        </div>
      </div>
    </>
  );
};

//Render product page on click. getStaticProps + Paths too slow in development
export const getServerSideProps = async (context) => {
  const res = await fetch(
    `http://localhost:3000/api/products/${context.params.id}`
  );

  const product = await res.json();

  return {
    props: {
      product,
    },
  };
};

// export const getStaticProps = async (context) => {
//   const res = await fetch(
//     `http://localhost:3000/api/products/${context.params.id}`
//   );

//   const product = await res.json();

//   return {
//     props: {
//       product,
//     },
//   };
// };

// export const getStaticPaths = async () => {
//   const res = await fetch(`http://localhost:3000/api/products`);

//   const product = await res.json();

//   const ids = product.map((item) => item.id);
//   const paths = ids.map((id) => ({ params: { id: id.toString() } }));

//   return {
//     paths,
//     fallback: false,
//   };
// };

export default product;
