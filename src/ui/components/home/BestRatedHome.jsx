import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { CardProduct } from "../common/CardProduct";
import { useEffect, useState } from "react";
import { loadProducts } from "../../../hunt/helpers/loadProducts";
import { ProductView } from "../../../hunt/pages/products/ProductView";

export const BestRatedHome = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsData = await loadProducts();
        setProducts(productsData);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const card = products.map((item) => (
    <CardProduct
      key={item.userId}
      name={item.name}
      url={item.ProductURL}
      description={item.ProductDescription}
      UserName={item.User}
      Url={item.Url}
    />
  ));

  return (
    <div>
      <div className="flex items-center">
        <h1 className="text-xl font-semibold">Best rated</h1>
        <h2 className="text-lg text-gray-500 ml-auto">All</h2>
      </div>

      <Carousel responsive={responsive}>{card}</Carousel>
    </div>
  );
};
