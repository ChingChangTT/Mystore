import { useEffect, useState } from "react";
import Glide from "@glidejs/glide";
import Marquee from "./Marquee";
import ItemCard from "./ItemCard";

import Skeletonslide from "./Sketleton/SketletonSlide";
export default function SliderIndicatorsInside() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "https://api.escuelajs.co/api/v1/products"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setProducts(data.slice(0, 20));
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    if (!loading) {
      const slider = new Glide(".glide-02", {
        type: "slider",
        focusAt: "center",
        perView: 1,
        autoplay: 3500,
        animationDuration: 700,
        gap: 0,
        classes: {
          nav: {
            active: "[&>*]:bg-wuiSlate-700",
          },
        },
      }).mount();

      return () => {
        slider.destroy();
      };
    }
  }, [loading]);

  if (loading) {
    return <Skeletonslide/>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="w-4/5 m-auto mt-24">
      {/*<!-- Component: Slider with indicators inside --> */}
      <div className="relative max-w-full glide-02">
        {/*<!-- Slides --> */}
        <div className="overflow-hidden h-lvh" data-glide-el="track">
          <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0">
            {products.map((product) => {
              const imageUrl = product.images && product.images.length > 0 ? product.images[0].replace(/[\[\]"]/g, "") : 'https://i.pinimg.com/564x/f7/c0/ef/f7c0ef2078b38902d6f095906d7ca13e.jpg';
              return (
                <li key={product.id}>
                  <img
                    src={imageUrl || 'https://i.pinimg.com/564x/f7/c0/ef/f7c0ef2078b38902d6f095906d7ca13e.jpg'}
                    className="w-full max-w-full m-auto object-cover"
                    alt={product.title}
                  />
                </li>
              );
            })}
          </ul>
        </div>
        {/*<!-- Indicators --> */}
        <div
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex justify-center gap-2"
          data-glide-el="controls[nav]"
        >
          {products.map((product, index) => (
            <button
              key={product.id}
              className="p-4 group items-center"
              data-glide-dir={`=${index}`}
              aria-label={`goto slide ${index + 1}`}
            >
              <span className="block w-2 h-2 transition-colors m-auto duration-500 rounded-full bg-white/20 ring-1 ring-slate-700 focus:outline-none"></span>
            </button>
          ))}
        </div>
      </div>
      <Marquee />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
        {products.map((product) => {
            const imageUrl = product.images && product.images.length > 0 ? product.images[0].replace(/[\[\]"]/g, "") : 'https://i.pinimg.com/564x/f7/c0/ef/f7c0ef2078b38902d6f095906d7ca13e.jpg';
          return (
            <ItemCard
              key={product.id}
              imagurl={imageUrl || 'https://i.pinimg.com/564x/f7/c0/ef/f7c0ef2078b38902d6f095906d7ca13e.jpg'}
              title={product.title}
              text={product.description}
              txtbtn="Order now"
              price={product.price}
            />
          );
        })}
      </div>
    </div>
  );
}
