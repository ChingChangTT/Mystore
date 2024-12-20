
import { Link, useLocation } from "react-router-dom";
import coimg1 from '../images/cover-img-1.jpg'
import  { useContext } from "react";
import { DataContext } from '../context/DataContext';
import { useState,useEffect } from "react";
export default function Women() {
    const location = useLocation();
    const { products, addToCart } = useContext(DataContext); 
  const { pathname } = location;
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }); 
    return () => clearTimeout(timer);
  }, []);
  const handleAddToCart = (product) => {
    addToCart(product);
    alert(`${product.title} has been added to the cart.`);
  };
  return (
    <>
     {loading ? (
        <div className="colorlib-loader">Loading...</div>
      ) : (
        <div id="page"> 
        <div className="breadcrumbs">
      <div className="container">
        <div className="row">
          <div className="col">
            <p className="bread">
              <span>
              <a href="index.html"><Link
                      className={`${
                        pathname === "/Home"
                          ? "bg-blue-500 p-2 rounded text-white"
                          : "hover:text-red-700 p-2 rounded text-black"
                      }`}
                      //base on current url 'pathname'
                      to="/MyHome">Home
                    </Link></a>
              </span>{" "}
              / <span>Women</span>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="breadcrumbs-two">
      <div className="container">
        <div className="row">
          <div className="col">
            <div
              className="breadcrumbs-img"
              style={{ backgroundImage: `url(${coimg1})` }}
            >
              <h2>Women's</h2>
            </div>
            <div className="menu text-center">
              <p>
                <a href="#">New Arrivals</a>{" "}
                <a href="#">Best Sellers</a>{" "}
                <a href="#">Extended Widths</a>{" "}
                <a href="#">Sale</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="colorlib-featured">
      <div className="container">
        <div className="row">
          {products.slice(0, 3).map((product) => (
            <div className="col-sm-4 text-center" key={product.id}>
              <div className="featured">
                <div
                  className="featured-img featured-img-2"
                  style={{
                    backgroundImage: `url(${product.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <h2>{product.title}</h2>
                  <p>
                    <a href="#" className="btn btn-primary btn-lg"  onClick={() => handleAddToCart(product)}>
                    <Link
                      className={`${
                        pathname === "/cart"
                          ? "bg-blue-500 p-2 rounded text-white"
                          : "hover:text-red-700 p-2 rounded text-black"
                      }`}
                      to="/cart">Shop now
                    </Link>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    <div className="colorlib-product">
      <div className="container">
        <div className="row">
          
          <div className="col-lg-3 col-xl-3">
      <div className="row">
        
        <div className="col-sm-12">
          <div className="side border mb-1">
            <h3>Brand</h3>
            <ul>
              <li><a href="#">Nike</a></li>
              <li><a href="#">Adidas</a></li>
              <li><a href="#">Merrel</a></li>
              <li><a href="#">Gucci</a></li>
              <li><a href="#">Skechers</a></li>
            </ul>
          </div>
        </div>
        <div className="col-sm-12">
          <div className="side border mb-1">
            <h3>Size/Width</h3>
            <div className="block-26 mb-2">
              <h4>Size</h4>
              <ul>
                {[7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13, 13.5, 14].map(size => (
                  <li key={size}><a href="#">{size}</a></li>
                ))}
              </ul>
            </div>
            <div className="block-26">
              <h4>Width</h4>
              <ul>
                {["M", "W"].map(width => (
                  <li key={width}><a href="#">{width}</a></li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Style Section */}
        <div className="col-sm-12">
          <div className="side border mb-1">
            <h3>Style</h3>
            <ul>
              {["Slip Ons", "Boots", "Sandals", "Lace Ups", "Oxfords"].map(style => (
                <li key={style}><a href="#">{style}</a></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="col-sm-12">
          <div className="side border mb-1">
            <h3>Colors</h3>
            <ul>
              {["Black", "White", "Blue", "Red", "Green", "Grey", "Orange", "Cream", "Brown"].map(color => (
                <li key={color}><a href="#">{color}</a></li>
              ))}
            </ul>
          </div>
        </div>
        <div className="col-sm-12">
          <div className="side border mb-1">
            <h3>Material</h3>
            <ul>
              {["Leather", "Suede"].map(material => (
                <li key={material}><a href="#">{material}</a></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="col-sm-12">
          <div className="side border mb-1">
            <h3>Technologies</h3>
            <ul>
              {["BioBevel", "Groove", "FlexBevel"].map(tech => (
                <li key={tech}><a href="#">{tech}</a></li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className="col-lg-9 col-xl-9">
    <div className="row row-pb-md">
            {products.map((product) => (
              <div
                className="col-md-3 col-lg-3 mb-4 text-center"
                key={product.id}>
                <div className="product-entry border">
                  <a
                    href="#"
                    className="prod-img"
                    style={{ width: "150px", height: "150px", margin: "auto" }}>
                    <img
                      src={product.image}
                      className="img-fluid w-full h-full object-cover m-auto"
                      alt={product.name}
                    />
                  </a>
                  <div className="desc my-5">
                    <h2>
                      <a href="#">{product.name}</a>
                    </h2>
                    <span className="price">${product.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="row">
            <div className="col-md-12 text-center">
              <div className="block-27">
                <ul className="list-unstyled d-inline-flex">
                  <li>
                    <a href="#">
                      <i className="ion-ios-arrow-back"></i>
                    </a>
                  </li>
                  <li className="active">
                    <span>1</span>
                  </li>
                  <li>
                    <a href="#">2</a>
                  </li>
                  <li>
                    <a href="#">3</a>
                  </li>
                  <li>
                    <a href="#">4</a>
                  </li>
                  <li>
                    <a href="#">5</a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="ion-ios-arrow-forward"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
        </div>
      )}
    </>
  )
}
