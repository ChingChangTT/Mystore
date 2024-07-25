import { useState, useEffect } from "react";

export default function Page() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://api.escuelajs.co/api/v1/categories');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProducts(data);
        console.log(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="relative flex w-full items-center">
      <div className="relative flex max-w-[100vw] overflow-hidden py-5">
        <div className="flex w-max animate-marquee [--duration:30s] hover:[animation-play-state:paused]">
          {products.map((product) => (
            <div key={product.id} className="h-full px-2.5">
              <div className="relative h-full w-[28rem] rounded-2xl border border-white/5 bg-white/5 px-8 py-6">
                <div className="mt-auto flex items-center gap-4">
                  <img
                    src={product.image ? product.image : 'https://i.pinimg.com/564x/81/f3/e2/81f3e2101904a21d8256193cc95f072f.jpg'}
                    className="h-56 w-56 rounded-full"
                    alt={product.name}
                  />
                  <div className="flex flex-col text-sm">
                    <div className="text-black">
                      <h1 className="text-xl font-semibold">{product.name}</h1>
                    </div>
                    <div className="text-black">
                      <h1>{product.creationAt}</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
