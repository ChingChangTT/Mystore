

import img1 from "../images/img_bg_1.jpg";
import imgmen from "../images/men.jpg";
import imgwomen from "../images/women.jpg";
import { useContext } from "react";
import { DataContext } from "../context/DataContext";
export default function Home() {
  const { products, loading } = useContext(DataContext);

  if (loading) return <p>Loading products...</p>;

  return (
    <>
      <aside id="colorlib-hero">
        <div className="flexslider">
          <ul className="slides">
            <li style={{ backgroundImage: `url(${img1})` }}>
              <div className="overlay"></div>
              <div className="container-fluid">
                <div className="row">
                  <div className="col-sm-6 offset-sm-3 text-center slider-text">
                    <div className="slider-text-inner">
                      <div className="desc">
                        <h1 className="head-1">Men's</h1>
                        <h2 className="head-2">Shoes</h2>
                        <h2 className="head-3">Collection</h2>
                        <p className="category">
                          <span>New trending shoes</span>
                        </p>
                        <p>
                          <a href="#" className="btn btn-primary">
                            Shop Collection
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li style={{ backgroundImage: "url(images/img_bg_2.jpg)" }}>
              <div className="overlay"></div>
              <div className="container-fluid">
                <div className="row">
                  <div className="col-sm-6 offset-sm-3 text-center slider-text">
                    <div className="slider-text-inner">
                      <div className="desc">
                        <h1 className="head-1">Huge</h1>
                        <h2 className="head-2">Sale</h2>
                        <h2 className="head-3">
                          <strong className="font-weight-bold">50%</strong> Off
                        </h2>
                        <p className="category">
                          <span>Big sale sandals</span>
                        </p>
                        <p>
                          <a href="#" className="btn btn-primary">
                            Shop Collection
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li style={{ backgroundImage: "url(images/img_bg_3.jpg)" }}>
              <div className="overlay"></div>
              <div className="container-fluid">
                <div className="row">
                  <div className="col-sm-6 offset-sm-3 text-center slider-text">
                    <div className="slider-text-inner">
                      <div className="desc">
                        <h1 className="head-1">New</h1>
                        <h2 className="head-2">Arrival</h2>
                        <h2 className="head-3">
                          up to{" "}
                          <strong className="font-weight-bold">30%</strong> off
                        </h2>
                        <p className="category">
                          <span>New stylish shoes for men</span>
                        </p>
                        <p>
                          <a href="#" className="btn btn-primary">
                            Shop Collection
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </aside>
      <div className="colorlib-intro">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 text-center">
              <h2 className="intro">
                It started with a simple idea: Create quality, well-designed
                products that I wanted myself.
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="colorlib-product">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-6 text-center">
              <div className="featured">
                <a
                  href="#"
                  className="featured-img"
                  style={{ backgroundImage: `url(${imgmen})` }}></a>
                <div className="desc">
                  <h2>
                    <a href="#">Shop Men's Collection</a>
                  </h2>
                </div>
              </div>
            </div>
            <div className="col-sm-6 text-center">
              <div className="featured">
                <a
                  href="#"
                  className="featured-img"
                  style={{ backgroundImage: `url(${imgwomen})` }}></a>
                <div className="desc">
                  <h2>
                    <a href="#">Shop Women's Collection</a>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="colorlib-product">
        <div className="container">
          <div className="row">
            <div className="col-sm-8 offset-sm-2 text-center colorlib-heading">
              <h2>Best Sellers</h2>
            </div>
          </div>

          <div className="row row-pb-md ">
            {products.map((category) => (
              <div className="col-lg-3 mb-4 text-center " key={category.id}>
                <div className="product-entry border ">
                  <a
                    href="#"
                    className="prod-img d-flex justify-content-center align-items-center">
                    <img
                      src={category.image}
                      className="img-fluid"
                      alt="Free html5 bootstrap 4 template"
                      style={{
                        width: "150px",
                        height: "200px",
                        objectFit: "cover",
                      }}
                    />
                  </a>
                  <div className="desc">
                    <h2>
                      <a href="#">Women's Boots Shoes Maca</a>
                    </h2>
                    <span className="price">$139.00</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
