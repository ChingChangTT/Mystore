import  Axios  from "axios"
import { useState,useEffect } from "react"
import { useNavigate } from "react-router-dom";
export default function ItemCard({id, imagurl, title, text, txtbtn, loading,price }) {
  const navigate = useNavigate();
  const [isPaid, setIsPaid] = useState(false);
  const handleNavigation = () => {
    console.log(`Navigating to: ${isPaid ? '/Paid' : `/detail/${id}`}`);
    if (txtbtn=='Order now') {
      // navigate('/Paid');
      navigate('/paid', { state: { imageUrl: imagurl, title: title, price: price } });
    } 
    else 
    {
     navigate(`/detail/${id}`);
    }
  };
  return (
    <div className="p-8 max-w-lg border border-indigo-300 rounded-2xl hover:shadow-xl hover:shadow-indigo-50 flex flex-col items-center">
      <img
        src={loading ? 'https://via.placeholder.com/150' : imagurl ? imagurl : 'https://i.pinimg.com/564x/f7/c0/ef/f7c0ef2078b38902d6f095906d7ca13e.jpg'}
        className="shadow rounded-lg border object-cover w-full h-96"
        alt={loading ? "Loading..." : title}
      />
      <div className="mt-8 flex flex-col flex-grow">
        <h4 className="font-bold text-xl">{loading ? "Loading title..." : title || "Default title"}</h4>
        <p className="mt-2 text-gray-600">
          {loading ? "Loading text..." : text || "Default text"}
        </p>
        <div className="mt-auto">
        
          <button
            type="button"
            onClick={handleNavigation}
            className="inline-flex items-center rounded-md border border-transparent bg-gray-800 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-gray-900"
          >
            {loading ? "Loading..." : txtbtn || (isPaid ? "Go to Paid" : "Go to Detail")}
          </button>
       
        </div>
      </div>
    </div>
  );
}

export function Cardresult() {
  const Base_URL = 'https://fakestoreapi.com/products';
  const [products, setProducts] = useState([]);// use for get data to browser 
  const [islaoding,setLoading]=useState(true)
  const fetchingData = () => {
    Axios.get(Base_URL)
      .then((res) => {
        setProducts(res.data);
        setLoading(false)
      })
      .catch((err) => {
        console.error("Error fetching data", err);
      });
  };

  useEffect(() => {
    fetchingData();
  }, []);

  return (
    <div className='w-3/4 m-auto mt-24 mb-11 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'>
      { islaoding ? Array.from({ length: products.length || 10 }).map((_, index) => (
            <ItemCard key={index} loading={true} />
          )) : products.map((product) => (
        <ItemCard
          key={product.id}
          id={product.id}
          imagurl={product.image}
          title={product.title}
          text={product.description}
          txtbtn="Read more"
          price={product.price}
        />
      ))}
    </div>
  );
}