import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";
import ConfirmationDialog from "./BtnConfirm";
// export default function Shopping({ Proname, Price,loading,Pic }) {
//   const [buttons, setButtons] = useState([
//     { id: 1, clicked: false },
//     { id: 2, clicked: false },
//   ]);

//   // Function to handle button clicks
//   const handleClick = (id) => {
//     setButtons(
//       buttons.map((button) => {
//         if (button.id === id) {
//           return { ...button, clicked: !button.clicked };
//         }
//         return button;
//       })
//     );
//   };

//   // Helper function to dynamically generate class names
//   const btnclass = (clicked, buttonType) =>
//     `ml-auto py-2 px-4 rounded-lg text-white ${
//       clicked
//         ? "bg-red-500 hover:bg-red-600"
//         : "bg-blue-500 hover:bg-blue-600 ml-auto"
//     }`;
//   return (
//     <div className="mx-auto mt-16 bg-white rounded-lg overflow-hidden md:w-4/5 border border-gray-400">
//       <div className="px-4 py-2 border-b border-gray-200 w-full">
//         <h1 className="font-semibold text-3xl py-5 text-gray-800 text-center">
//           Shopping Cart
//         </h1>
//       </div>

//       <div className="px-4 py-2 border-b border-gray-200 w-full"></div>
//       <div className="flex flex-col divide-y divide-gray-200 full">
//         <div className="flex items-center py-4 px-6 ">
//           <img
//             className="w-24 h-24 object-cover rounded"
//             src={Pic || 'https://i.pinimg.com/564x/f7/c0/ef/f7c0ef2078b38902d6f095906d7ca13e.jpg'}
//             alt="Product Image"
//           />
//           <div className="ml-3">
//             <h3 className="text-gray-900 font-semibold">
//               {loading ? "Loading ..." : Proname || "Default"}
//             </h3>
//             <p className="text-gray-700 mt-1">{loading ? "Loading ..." : Price || 0}$</p>
//           </div>
//           {/* Adjusted button for Remove */}
//           <button
//             className={btnclass(
//               buttons.find((b) => b.id === 2).clicked,
//               "remove"
//             )}
//             onClick={() => handleClick(2)}>
//             Remove
//           </button>
//         </div>
//       </div>
//       <div className="flex items-center justify-between px-6 py-3 bg-gray-100">
//         <h3 className="text-gray-900 font-semibold">Total: $29.98</h3>
//         {/* Adjusted button for Checkout */}
//         <button className="ml-auto py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg">
//           Checkout
//         </button>
//       </div>
//     </div>
//   );
// }
// export function ShoppingResult(){
//   const Base_URL = "https://fakestoreapi.com/products";
//   const [products, setProducts] = useState([]);
//   const [islaoding,setLoading]=useState(true)
//   // const { id } = useParams();
//   const { id } = useParams();
//   const fetchFun = () => {
//     Axios.get(`${Base_URL}/${id}`)
//       .then((res) => {
//         setProducts(res.data);
//         console.log(res.data);
//         setLoading(false)
//       })
//       .catch((err) => {
//         console.error("Can't fetch data", err);
//       });
//   };
//   useEffect(() => {
//     fetchFun();
//   }, [id]);
//   return (
//     <>
//      { islaoding ? (
//             <Shopping loading={true} />
//           ) :  products &&  (
//             <Shopping
//             Pic={products.image}
//             Price={products.price}
//             Proname={products.title}
//             text={products.description} />
//           )}
//     </>
//   )
// }
function SkeletonLoader() {
  return (
    <div className="flex flex-col divide-y divide-gray-200 full animate-pulse">
      {/* Placeholder for the product image */}
      <div className="flex items-center py-4 px-6 w-full justify-between border-y-2">
        <div className="w-1/5 h-24 bg-gray-300 rounded"></div>
        <div className="ml-3 flex-1">
          {/* Placeholder for the product title */}
          <div className="h-6 bg-gray-300 rounded w-3/4 mb-2"></div>
          {/* Placeholder for the product price */}
          <div className="h-6 bg-gray-300 rounded w-1/4"></div>
        </div>
        {/* Placeholder for the remove button */}
        <div className="ml-2 py-2 px-4 w-24 bg-gray-300 rounded-lg"></div>
      </div>
    </div>
  );
}

export default function Shopping({ products = [], loading, onRemove, fetchType }) {
  const [showDialog, setShowDialog] = useState(false);
  const [productToRemove, setProductToRemove] = useState(null);

  const handleRemove = (productId) => {
    setProductToRemove(productId);
    setShowDialog(true);
  };

  const confirmRemove = () => {
    onRemove(productToRemove);
    setShowDialog(false);
    setProductToRemove(null);
  };

  const cancelRemove = () => {
    setShowDialog(false);
    setProductToRemove(null);
  };

  return (
    <>
      <div className="mx-auto mt-16 bg-white rounded-lg overflow-hidden md:w-4/5 border border-gray-400">
        <div className="px-4 py-2 border-b border-gray-200 w-full">
          <h1 className="font-semibold text-3xl py-5 text-gray-800 text-center">
            Shopping Cart
          </h1>
        </div>
        {loading ? (
          fetchType === 'single' ? (
            <SkeletonLoader /> // Show one skeleton loader for single product
          ) : (
            Array.from({ length: 5 }).map((_, index) => <SkeletonLoader key={index} />) // Show multiple skeleton loaders for multiple products
          )
        ) : (
          products.map((product) => (
            <div key={product.id} className="flex flex-col divide-y divide-gray-200 full">
              <div className="flex items-center py-4 px-6 w-full justify-between border-y-2">
                <img
                  className="w-1/5 h-auto object-cover rounded gap-8"
                  src={product.image || 'https://i.pinimg.com/564x/f7/c0/ef/f7c0ef2078b38902d6f095906d7ca13e.jpg'}
                  alt="Product Image"
                />
                <div className="ml-3">
                  <h3 className="text-gray-900 font-semibold">
                    {product.title || "Default"}
                  </h3>
                  <p className="text-gray-700 mt-1">
                    {product.price || 0}$
                  </p>
                </div>
                <button
                  className="ml-2 py-2 px-4 bg-blue-700 hover:bg-red-600 text-white rounded-lg"
                  onClick={() => handleRemove(product.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))
        )}
        {!loading && products.length > 0 && (
          <div className="flex items-center justify-between px-6 py-3 bg-gray-100">
            <h3 className="text-gray-900 font-semibold">
              Total: ${products.reduce((total, product) => total + product.price, 0).toFixed(2)}
            </h3>
            <button className="ml-auto py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg">
              Checkout
            </button>
          </div>
        )}
      </div>
      {showDialog && (
        <ConfirmationDialog onConfirm={confirmRemove} onCancel={cancelRemove} />
      )}
    </>
  );
}

export function ShoppingResult() {
  const Base_URL = "https://fakestoreapi.com/products";
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const { id } = useParams();

  const fetchAllProducts = () => {
    Axios.get(Base_URL)
      .then((res) => {
        console.log("Fetched products:", res.data); // Log the response
        setProducts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Can't fetch data", err);
        setLoading(false);
      });
  };

  const fetchProductById = (productId) => {
    Axios.get(`${Base_URL}/${productId}`)
      .then((res) => {
        console.log("Fetched product:", res.data); // Log the response
        setProducts([res.data]);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Can't fetch data", err);
        setLoading(false);
      });
  };

  useEffect(() => {
    if (id) {
      fetchProductById(id);
    } else {
      fetchAllProducts();
    }
  }, [id]);

  console.log("Products state:", products); // Log the products state
  const handleRemove = async (productId) => {
    try {
      // Assuming you have an API endpoint to delete a product by ID
      await Axios.delete(`${Base_URL}/${productId}`);
      // After successful deletion, update the local state
      setProducts(products.filter(product => product.id !== productId));
    } catch (error) {
      console.error("Failed to remove product:", error);
      // Handle error (e.g., show an error message)
    }
  };
  

  return (
    <Shopping
      products={products}
      loading={isLoading}
      fetchType={id ? 'single' : 'multiple'}
      onRemove={handleRemove}
    />
  );
}

