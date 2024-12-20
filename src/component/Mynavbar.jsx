
import { Link, useLocation } from "react-router-dom";
import { useContext } from "react";
import { DataContext } from "../context/DataContext";
export default function Mynavbar() {
  const location = useLocation();
  const { pathname } = location;
  const { cart } = useContext(DataContext); 
  const calculateCartCount = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const isActive = (path) => {
    return pathname === path
      ? {
          color: "#2a9d8f", 
          // backgroundColor: "#f8f9fa", 
          // padding: "8px 12px",
          // borderRadius: "5px",
          // boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.1)",
        }
      : {
          color: "#6c757d",
          // padding: "8px 12px",
          // borderRadius: "5px",
          // transition: "background-color 0.3s",
        };
  };
  return (
    <nav className="colorlib-nav " role="navigation">
      <div className="top-menu">
        <div className="container">
          <div className="row">
            <div className="col-sm-7 col-md-9">
              <div id="colorlib-logo">
                <a href="index.html"><Link
                      style={isActive("/")}
                     
                      to="/">
                     Footwear
                    </Link></a>
              </div>
            </div>
            <div className="col-sm-5 col-md-3">
              <form action="#" className="search-wrap">
                <div className="form-group">
                  <input
                    type="search"
                    className="form-control search"
                    placeholder="Search"
                  />
                  <button
                    className="btn btn-primary submit-search text-center"
                    type="submit">
                    <i className="icon-search"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 text-left menu-1">
              <ul>
                <li className="active">
                  <a href="index.html">
                    {" "}
                    <Link
                      style={isActive("/Home")}
                    
                      to="/Home">
                      Home
                    </Link>
                  </a>
                </li>
                <li className="has-dropdown">
                  <a href="men.html"> <Link
                      style={isActive("/Men")}
                      
                      to="/Men">
                      Men 
                    </Link></a>
                  <ul className="dropdown">
                    <li>
                      <a >Product Detail</a>
                    </li>
                    <li>
                      <a >Shopping Cart</a>
                    </li>
                    <li>
                      <a >Checkout</a>
                    </li>
                    <li>
                      <a >Order Complete</a>
                    </li>
                    <li>
                      <a>Wishlist</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a ><Link
                      style={isActive("/Women")}
                     
                      to="/women">
                     Women
                    </Link></a>
                </li>
                <li>
                  <a><Link
                      style={isActive("/aboutUs")}
                     
                      to="/aboutUs">
                     About
                    </Link></a>
                </li>
                <li>
                  <a ><Link
                      style={isActive("/contact")}
                      
                      to="/contact">
                     Contact
                    </Link></a>
                </li>
                <li className="cart">
                  <a href="cart.html"><Link
                      style={isActive("/cart")}
                     
                      to="/cart">
                     <i className="icon-shopping-cart"></i> Cart [{calculateCartCount()}]
                    </Link>
                    
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="sale">
        <div className="container">
          <div className="row">
            <div className="col-sm-8 offset-sm-2 text-center">
              <div className="row">
                <div className="owl-carousel2">
                  <div className="item">
                    <div className="col">
                      <h3>
                        <a href="#">
                          25% off (Almost) Everything! Use Code: Summer Sale
                        </a>
                      </h3>
                    </div>
                  </div>
                  <div className="item">
                    <div className="col">
                      <h3>
                        <a href="#">
                          Our biggest sale yet 50% off all summer shoes
                        </a>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
