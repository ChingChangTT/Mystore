import { Link, useLocation } from "react-router-dom";
import coimg1 from "../images/cover-img-1.jpg";
import { useContext } from "react";
import { DataContext } from "../context/DataContext";

export default function Men() {
  const location = useLocation();
  const { products, addToCart } = useContext(DataContext);
  const { pathname } = location;

  const handleAddToCart = (product) => {
    addToCart(product);
    alert(`${product.title} has been added to the cart.`);
  };

  return (
    <>
      <div>
        <div className="breadcrumbs">
          <div className="container">
            <div className="row">
              <div className="col">
                <p className="bread">
                  <span>
                    <Link
                      className={`${
                        pathname === "/Home"
                          ? "bg-blue-500 p-2 rounded text-white"
                          : "hover:text-red-700 p-2 rounded text-black"
                      }`}
                      to="/Home">
                      Home
                    </Link>
                  </span>{" "}
                  / <span>Men</span>
                </p>
              </div>
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
                style={{ backgroundImage: `url(${coimg1})` }}>
                <h2>Men's</h2>
              </div>
              <div className="menu text-center">
                <p>
                  <a href="#">New Arrivals</a> <a href="#">Best Sellers</a>{" "}
                  <a href="#">Extended Widths</a> <a href="#">Sale</a>
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
                    }}>
                    <h2>{product.title}</h2>
                    <p>
                      <button
                        className="btn btn-primary btn-lg"
                        onClick={() => handleAddToCart(product)}>
                        <Link
                      className={`${
                        pathname === "/cart"
                          ? "bg-blue-500 p-2 rounded text-white"
                          : "hover:text-red-700 p-2 rounded text-black"
                      }`}
                      to="/cart">
                       Shop now
                    </Link>
                      </button>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="colorlib-product m-auto">
        <div className="container">
          <div className="row">
            <div className="col-sm-8 offset-sm-2 text-center colorlib-heading colorlib-heading-sm">
              <h2>View All Products</h2>
            </div>
          </div>
          <div className="row row-pb-md">
            {products.map((product) => (
              <div
                className="col-md-3 col-lg-3 mb-4 text-center"
                key={product.id}>
                <div className="product-entry border">
                  <div
                    className="prod-img"
                    style={{
                      width: "150px",
                      height: "150px",
                      margin: "auto",
                      backgroundImage: `url(${product.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />
                  <div className="desc my-5">
                    <h2>{product.title}</h2>
                    <span className="price">${product.price}</span>
                    <button
                      className="btn btn-primary btn-sm mt-2"
                      onClick={() => handleAddToCart(product)}>
                      Add to Cart
                    </button>
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
    </>
  );
}
