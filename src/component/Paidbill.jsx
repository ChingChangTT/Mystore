// Paidbill.js
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

const Paidbill = () => {
  const { state } = useLocation();
  const imageUrl = state?.imageUrl;
  const title = state?.title;
  const price = state?.price || 0;
  const [quantity, setQuantity] = useState(1);

  const discountPercentage = 50; // 50% discount
  const subtotal = price * quantity;
  const discountAmount = (subtotal * discountPercentage) / 100;
  const total = subtotal - discountAmount;

  const handleQuantityChange = (event) => {
    setQuantity(parseInt(event.target.value, 10));
  };

  const handleClick = () => {
    window.location.href = 'https://tailwindnutrition.co.za/faqs/shipping/';
  };

  return (
    <div className="py-14 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto mt-14">
      <div className="flex justify-start item-start space-y-2 flex-col">
        <h1 className="text-3xl dark:text-white lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800">
          Order #13432
        </h1>
        <p className="text-base dark:text-gray-300 font-medium leading-6 text-gray-600">
          21st March 2021 at 10:34 PM
        </p>
      </div>
      <div className="mt-10 flex flex-col xl:flex-row justify-center items-stretch w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
        <div className="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
          <div className="flex flex-col justify-start items-start dark:bg-gray-800 bg-gray-50 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full">
            <p className="text-lg md:text-xl dark:text-white font-semibold leading-6 xl:leading-5 text-gray-800">
              Customer’s Cart
            </p>
            <div className="mt-4 md:mt-6 flex flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full">
              <div className="pb-4 md:pb-8 w-full md:w-40">
                <img
                  className="w-full hidden md:block"
                  src={imageUrl || 'https://i.pinimg.com/736x/a1/e3/b3/a1e3b39a4bcc259e129582720ff74317.jpg'}
                  alt="product"
                />
                <img
                  className="w-full md:hidden"
                  src={imageUrl || 'https://i.pinimg.com/736x/a1/e3/b3/a1e3b39a4bcc259e129582720ff74317.jpg'}
                  alt="product"
                />
              </div>
              <div className="border-b border-gray-200 md:flex-row flex-col flex justify-between items-start w-full pb-8 space-y-4 md:space-y-0">
                <div className="w-full flex flex-col justify-start items-start space-y-8">
                  <h3 className="text-xl dark:text-white xl:text-2xl font-semibold leading-6 text-gray-800">
                    {title || 'Default title here'}
                  </h3>
                  <div className="flex justify-start items-start flex-col space-y-2">
                    <p className="text-sm dark:text-white leading-none text-gray-800">
                      <span className="dark:text-gray-400 text-gray-300">Style: </span> Italic Minimal Design
                    </p>
                    <p className="text-sm dark:text-white leading-none text-gray-800">
                      <span className="dark:text-gray-400 text-gray-300">Size: </span> Small
                    </p>
                    <p className="text-sm dark:text-white leading-none text-gray-800">
                      <span className="dark:text-gray-400 text-gray-300">Color: </span> Light Blue
                    </p>
                  </div>
                </div>
                <div className="flex justify-between space-x-8 items-start w-full">
                  <p className="text-base dark:text-white xl:text-lg leading-6">
                    <span className="text-red-300 line-through">{price}$</span>
                  </p>
                  <input
                    type="number"
                    value={quantity}
                    min="1"
                    onChange={handleQuantityChange}
                    className="w-16 p-2 border rounded"
                  />
                  <p className="text-base dark:text-white xl:text-lg font-semibold leading-6 text-gray-800">${subtotal}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center flex-col md:flex-row items-stretch w-full space-y-4 md:space-y-0 md:space-x-6 xl:space-x-8">
            <div className="flex flex-col px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 dark:bg-gray-800 space-y-6">
              <h3 className="text-xl dark:text-white font-semibold leading-5 text-gray-800">Summary</h3>
              <div className="flex justify-center items-center w-full space-y-4 flex-col border-gray-200 border-b pb-4">
                <div className="flex justify-between w-full">
                  <p className="text-base dark:text-white leading-4 text-gray-800">Subtotal</p>
                  <p className="text-base dark:text-gray-300 leading-4 text-gray-600">${subtotal}</p>
                </div>
                <div className="flex justify-between items-center w-full">
                  <p className="text-base dark:text-white leading-4 text-gray-800">
                    Discount <span className="bg-gray-200 p-1 text-xs font-medium dark:bg-white dark:text-gray-800 leading-3 text-gray-800">STUDENT</span>
                  </p>
                  <p className="text-base dark:text-gray-300 leading-4 text-gray-600">-${discountAmount} ({discountPercentage}%)</p>
                </div>
                <div className="flex justify-between items-center w-full">
                  <p className="text-base dark:text-white leading-4 text-gray-800">Shipping</p>
                  <p className="text-base dark:text-gray-300 leading-4 text-gray-600">$0</p>
                </div>
              </div>
              <div className="flex justify-between items-center w-full">
                <p className="text-base dark:text-white font-semibold leading-4 text-gray-800">Total</p>
                <p className="text-base dark:text-gray-300 font-semibold leading-4 text-gray-600">${total}</p>
              </div>
            </div>
            <div className="flex flex-col justify-center px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 dark:bg-gray-800 space-y-6">
              <h3 className="text-xl dark:text-white font-semibold leading-5 text-gray-800">Shipping</h3>
              <div className="flex justify-between items-start w-full">
                <div className="flex justify-center items-center space-x-4">
                  <div className="w-8 h-8">
                    <img className="w-full h-full" alt="logo" src={imageUrl || 'https://i.pinimg.com/736x/a1/e3/b3/a1e3b39a4bcc259e129582720ff74317.jpg'} />
                  </div>
                  <div className="flex flex-col justify-start items-center">
                    <p className="text-lg leading-6 dark:text-white font-semibold text-gray-800">
                      DPD Delivery
                      <br />
                      <span className="font-normal">Delivery with 24 Hours</span>
                    </p>
                  </div>
                </div>
                <p className="text-lg font-semibold leading-6 dark:text-white text-gray-800">$8.00</p>
              </div>
              <div className="w-full flex justify-center items-center">
                <button onClick={handleClick} className="hover:bg-black dark:bg-white dark:text-gray-800 dark:hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 py-5 w-96 md:w-full bg-gray-800 text-base font-medium leading-4 text-white">
                  View Carrier Details
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col bg-gray-50 dark:bg-gray-800 w-full xl:w-96 px-4 py-6 md:p-6 xl:p-8 space-y-6">
                    <h3 className="text-xl dark:text-white font-semibold leading-5 text-gray-800">Customer</h3>
                    <div className="flex flex-col md:flex-row xl:flex-col justify-start items-start md:space-x-6 xl:space-x-0 w-full space-y-4 md:space-y-0 xl:space-y-6">
                      <div className="flex justify-center md:justify-start items-center md:items-start flex-col space-y-4 xl:mt-8">
                        <p className="text-base dark:text-white font-semibold leading-4 text-center md:text-left text-gray-800">John Doe</p>
                        <p className="text-sm dark:text-gray-300 leading-5 text-gray-600">
                          180 North King Street, Northhampton MA 1060
                        </p>
                      </div>
                      <div className="flex justify-center md:justify-start items-center md:items-start flex-col space-y-4 xl:mt-8">
                        <p className="text-base dark:text-white font-semibold leading-4 text-center md:text-left text-gray-800">+1234567890</p>
                        <p className="text-sm dark:text-gray-300 leading-5 text-gray-600">johndoe@gmail.com</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          };
          
          export default Paidbill;
          