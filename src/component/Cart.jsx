import { useState, useEffect, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { DataContext } from "../context/DataContext";

export default function Cart() {
  const location = useLocation();
  const { pathname } = location;
  const { products, cart, removeFromCart, updateCartQuantity } =
    useContext(DataContext);

  const [loading, setLoading] = useState(true);
  const [activeStep, setActiveStep] = useState(1);
  const [coupon, setCoupon] = useState("");
  const [subtotal] = useState(0);
  const [delivery] = useState(4.0);
  const [discount] = useState(0.5);
  const displayedProducts = products.slice(0, 8);
  const discountAmount = subtotal * discount; 
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleQuantityChange = (id, quantity) => {
    if (quantity > 0) {
      updateCartQuantity(id, quantity);
    }
  };

  const handleCouponChange = (e) => {
    setCoupon(e.target.value);
  };

  const applyCoupon = (e) => {
    e.preventDefault();
    console.log(`Coupon applied: ${coupon}`);
  };

  const calculateTotal = () => {
    return cart
      .reduce((acc, item) => acc + item.price * item.quantity, 0)
      .toFixed(2);
  };

  const total = (parseFloat(calculateTotal()) + delivery - discount).toFixed(2);

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
                    / <span>Shopping Cart</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="colorlib-product">
            <div className="container">
              <div className="row row-pb-lg">
                <div className="col-md-10 offset-md-1">
                  <div className="process-wrap">
                    {["Shopping Cart", "Checkout", "Order Complete"].map(
                      (step, index) => (
                        <div
                          key={index}
                          className={`process text-center ${
                            activeStep === index + 1 ? "active" : ""
                          }`}>
                          <p>
                            <span>{`0${index + 1}`}</span>
                          </p>
                          <h3>{step}</h3>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
              <div className="row row-pb-lg">
                <div className="col-md-12">
                  {/* Table Header */}
                  <div className="product-name d-flex">
                    <div className="one-forth text-left px-4">
                      <span>Product Details</span>
                    </div>
                    <div className="one-eight text-center">
                      <span>Price</span>
                    </div>
                    <div className="one-eight text-center">
                      <span>Quantity</span>
                    </div>
                    <div className="one-eight text-center">
                      <span>Total</span>
                    </div>
                    <div className="one-eight text-center px-4">
                      <span>Remove</span>
                    </div>
                  </div>

                  {/* Product List */}
                  {cart.map((item) => (
                    <div key={item.id} className="product-cart d-flex">
                      {/* Product Image and Name */}
                      <div className="one-forth">
                        <div
                          className="product-img"
                          style={{
                            backgroundImage: `url(${item.image})`,
                          }}></div>
                        <div className="display-tc">
                          <h3>{item.name}</h3>
                        </div>
                      </div>

                      {/* Product Price */}
                      <div className="one-eight text-center">
                        <div className="display-tc">
                          <span className="price">${item.price.toFixed(2)}</span>
                        </div>
                      </div>

                      {/* Product Quantity */}
                      <div className="one-eight text-center">
                        <div className="display-tc">
                          <input
                            type="number"
                            name="quantity"
                            className="form-control input-number text-center"
                            value={item.quantity}
                            min="1"
                            max="100"
                            onChange={(e) =>
                              handleQuantityChange(
                                item.id,
                                parseInt(e.target.value, 10)
                              )
                            }
                          />
                        </div>
                      </div>

                      {/* Total Price */}
                      <div className="one-eight text-center">
                        <div className="display-tc">
                          <span className="price">
                            ${(item.price * item.quantity).toFixed(2)}
                          </span>
                        </div>
                      </div>

                      {/* Remove Item */}
                      <div className="one-eight text-center">
                        <div className="display-tc">
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="closed"></button>
                        </div>
                      </div>
                    </div>
                  ))}

                  <div className="cart-total">
                    <h3>Total: ${calculateTotal()}</h3>
                  </div>
                </div>
              </div>

              <div className="row row-pb-lg">
                <div className="col-md-12">
                  <div className="total-wrap">
                    <div className="row">
                      <div className="col-sm-8">
                        <form onSubmit={applyCoupon}>
                          <div className="row form-group">
                            <div className="col-sm-9">
                              <input
                                type="text"
                                name="quantity"
                                className="form-control input-number"
                                placeholder="Your Coupon Number..."
                                value={coupon}
                                onChange={handleCouponChange}
                              />
                            </div>
                            <div className="col-sm-3">
                              <input
                                type="submit"
                                value="Apply Coupon"
                                className="btn btn-primary"
                              />
                            </div>
                          </div>
                        </form>
                      </div>
                      <div className="col-sm-4 text-center">
                        <div className="total">
                          <div className="sub">
                            <p>
                              <span>Subtotal:</span>{" "}
                              <span>${subtotal.toFixed(2)}</span>
                            </p>
                            <p>
                              <span>Delivery:</span>{" "}
                              <span>${delivery.toFixed(2)}</span>
                            </p>
                            <p>
                              <span>Discount:</span>{" "}
                              <span>${discount.toFixed(2)}</span>
                            </p>
                          </div>
                          <div className="grand-total">
                            <p>
                              <span>
                                <strong>Total:</strong>
                              </span>{" "}
                              <span>${total}</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Related Products */}
              <div className="row">
                <div className="col-sm-8 offset-sm-2 text-center colorlib-heading colorlib-heading-sm">
                  <h2>Related Products</h2>
                </div>
              </div>
              <div className="row">
                {displayedProducts.map((product) => (
                  <div
                    key={product.id}
                    className="col-md-3 col-lg-3 mb-4 text-center">
                    <div className="product-entry border">
                      <a
                        href="#"
                        className="prod-img"
                        style={{ display: "grid", placeContent: "center" }}>
                        <img
                          src={product.image}
                          className="img-fluid"
                          alt={product.title}
                          style={{
                            width: "200px",
                            height: "250px",
                            objectFit: "cover",
                          }}
                        />
                      </a>
                      <div className="desc">
                        <h2>
                          <a href="#">{product.title}</a>
                        </h2>
                        <span className="price">${product.price}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}  