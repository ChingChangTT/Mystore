import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
export default function About() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const { pathname } = location;
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    });
    return () => clearTimeout(timer);
  }, []);
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
                      <a href="index.html">
                        <Link
                          className={`${
                            pathname === "/Home"
                              ? "bg-blue-500 p-2 rounded text-white"
                              : "hover:text-red-700 p-2 rounded text-black"
                          }`}
                          to="/MyHome">
                          Home
                        </Link>
                      </a>
                    </span>{" "}
                    / <span>About</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="colorlib-about">
            <div className="container">
              <div className="row row-pb-lg">
                {/* Video Section */}
                <div className="col-sm-6 mb-3">
                  <div
                    className="video colorlib-video"
                    style={{ backgroundImage: "url(images/about.jpg)" }}>
                    <a
                      href="https://vimeo.com/channels/staffpicks/93951774"
                      className="popup-vimeo">
                      <i className="icon-play3"></i>
                    </a>
                    <div className="overlay"></div>
                  </div>
                </div>

                {/* Text Section */}
                <div className="col-sm-6">
                  <div className="about-wrap">
                    <h2>
                      Footwear the leading eCommerce Store around the Globe
                    </h2>
                    <p>
                      The Big Oxmox advised her not to do so, because there were
                      thousands of bad Commas, wild Question Marks and devious
                      Semikoli, but the Little Blind Text didn’t listen. She
                      packed her seven versalia, put her initial into the belt
                      and made herself on the way.
                    </p>
                    <p>
                      When she reached the first hills of the Italic Mountains,
                      she had a last view back on the skyline of her hometown
                      Bookmarksgrove, the headline of Alphabet Village and the
                      subline of her own road, the Line Lane. Pityful a rethoric
                      question ran over her cheek, then she continued her way.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
