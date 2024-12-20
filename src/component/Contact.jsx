
import { useState,useEffect,useCallback } from 'react'
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { Link, useLocation } from "react-router-dom";
export default function Contact() {
    const location = useLocation();
    const [loading, setLoading] = useState(true);
    const { pathname } = location;
    useEffect(() => {
      const timer = setTimeout(() => {
        setLoading(false);
      }); 
      return () => clearTimeout(timer);
    }, []);
    const [mapLoaded, setMapLoaded] = useState(false);
    const center = {
        lat: 40.7128,
        lng: -74.0060,
      };
      const onLoad = useCallback(() => {
        setMapLoaded(true);
      }, []);
      useEffect(() => {
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places`;
        script.async = true;
        script.onload = () => setMapLoaded(true);
        document.head.appendChild(script);
        
        return () => {
          document.head.removeChild(script);
        };
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
                          to="/Home">
                          Home
                        </Link>
                      </a>
                    </span>{" "}
                    / <span>Contact</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div id="colorlib-contact">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <h3>Contact Information</h3>
            <div className="row contact-info-wrap">
              <div className="col-md-3">
                <p>
                  <span>
                    <i className="icon-location"></i>
                  </span>
                  198 West 21th Street, <br /> Suite 721 New York NY 10016
                </p>
              </div>
              <div className="col-md-3">
                <p>
                  <span>
                    <i className="icon-phone3"></i>
                  </span>
                  <a href="tel://1234567920">+ 1235 2355 98</a>
                </p>
              </div>
              <div className="col-md-3">
                <p>
                  <span>
                    <i className="icon-paperplane"></i>
                  </span>
                  <a href="mailto:info@yoursite.com">info@yoursite.com</a>
                </p>
              </div>
              <div className="col-md-3">
                <p>
                  <span>
                    <i className="icon-globe"></i>
                  </span>
                  <a href="#">yoursite.com</a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Get In Touch Form */}
        <div className="row">
          <div className="col-md-6">
            <div className="contact-wrap">
              <h3>Get In Touch</h3>
              <form action="#" className="contact-form">
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="fname">First Name</label>
                      <input
                        type="text"
                        id="fname"
                        className="form-control"
                        placeholder="Your firstname"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="lname">Last Name</label>
                      <input
                        type="text"
                        id="lname"
                        className="form-control"
                        placeholder="Your lastname"
                      />
                    </div>
                  </div>
                  <div className="w-100"></div>
                  <div className="col-sm-12">
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input
                        type="text"
                        id="email"
                        className="form-control"
                        placeholder="Your email address"
                      />
                    </div>
                  </div>
                  <div className="w-100"></div>
                  <div className="col-sm-12">
                    <div className="form-group">
                      <label htmlFor="subject">Subject</label>
                      <input
                        type="text"
                        id="subject"
                        className="form-control"
                        placeholder="Your subject of this message"
                      />
                    </div>
                  </div>
                  <div className="w-100"></div>
                  <div className="col-sm-12">
                    <div className="form-group">
                      <label htmlFor="message">Message</label>
                      <textarea
                        name="message"
                        id="message"
                        cols="30"
                        rows="10"
                        className="form-control"
                        placeholder="Say something about us"
                      ></textarea>
                    </div>
                  </div>
                  <div className="w-100"></div>
                  <div className="col-sm-12">
                    <div className="form-group">
                      <input
                        type="submit"
                        value="Send Message"
                        className="btn btn-primary"
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* Map Section */}
          <div className="col-md-6">
          <LoadScript googleMapsApiKey="YOUR_API_KEY">
              {mapLoaded ? (
                <GoogleMap
                  id="map"
                  mapContainerStyle={{ height: "400px", width: "100%" }}
                  center={center}
                  zoom={12}
                  onLoad={onLoad}
                >
                  {/* Add a Marker on the map */}
                  <Marker position={center} />
                </GoogleMap>
              ) : (
                <div>Loading Map...</div>
              )}
            </LoadScript>
          </div>
        </div>
      </div>
    </div>
        </div>
      )}
    </>
  )
}
