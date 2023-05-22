import React from "react";
import Rectangle from "../assets/images/Rectangle30.png";
import DP from "../assets/images/dp.png";
import Logo from "../assets/images/Logo.png";
import HomeIcon from "../assets/images/Home.png";
import Invoices from "../assets/images/Invoices.png";
import Customers from "../assets/images/Customers.png";
import Products from "../assets/images/Products.png";
import Recurring from "../assets/images/Recurring.png";
import Discount from "../assets/images/Discount.png";
import Plus from "../assets/images/plus.png";

const Home = () => {
  return (
    <section>
      <div>
        <div className="h-[155px] mx-auto w-full relative">
          <img
            src={Rectangle}
            className="h-[155px] m-auto object-cover w-full"
            alt="banner"
          />
          <div className="relative">
            <div className="absolute bottom-10 left-0 right-0 flex items-center justify-between mx-4">
              <div className="bg-white rounded-lg p-4">
                <img src={Logo} className="w-12" alt="logo" />
              </div>
              <div className="bg-white rounded-lg p-4 ml-4">
                <div className="flex flex-row justify-center items-center">
                  <label htmlFor="" className="text-black mr-4">
                    Last 30 days:
                  </label>

                  <div className="bg-green-400 mr-2 rounded-lg px-4 py-2">
                    <span className="uppercase">Paid</span> <br />
                    $24,000
                  </div>
                  <div className="bg-slate-400 mr-2 px-4 py-2 rounded-lg">
                    <span className="uppercase">Pending</span> <br />
                    $41,000
                  </div>
                  <div className="bg-red-400 px-4 py-2 rounded-lg">
                    <span className="uppercase">Overdue</span> <br />
                    $65,600
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg p-4 ml-4">
                <div className="flex justify-center items-center">
                  <img src={DP} alt="" className="w-8 h-8 mr-3" />
                  <p className="font-semibold">Jort KKKKKKKKKKKK</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="w-1/4 h-full bg-white">
            <ul className="py-4 px-4 shadow-lg mt-10 mx-8 rounded-xl">
              <li className="flex items-center px-6 py-2 text-black my-4">
                <img src={HomeIcon} className="mr-4" alt="Home" />
                Home
              </li>
              <li className="flex items-center px-6 py-2 text-black my-4">
                <img src={Invoices} className="mr-4" alt="Invoices" />
                Invoices
              </li>
              <li className="flex items-center px-6 py-2 text-black my-4">
                <img src={Customers} className="mr-4" alt="Customers" />
                Customers
              </li>
              <li className="flex items-center px-6 py-2 text-black my-4">
                <img src={Products} className="mr-4" alt="Products" />
                Products
              </li>
              <li className="flex items-center px-6 py-2 text-black my-4">
                <img src={Recurring} className="mr-4" alt="Recurring" />
                Recurring
              </li>
              <li className="flex items-center px-6 py-2 text-black my-4">
                <img src={Discount} className="mr-4" alt="Discount" />
                Discount
              </li>
            </ul>
          </div>
          <div className="w-3/4 bg-white px-10 py-14">
            <div className="flex justify-between items-center">
              <h1 className="font-extrabold text-4xl">Recurring Invoices</h1>
              <button className="bg-black flex rounded-md px-4 pt-6 justify-center items-center">
                <div className="flex justify-center mb-5 items-center">
                  <span className="text-white">Add Recurring Invoice</span>
                  <img src={Plus} alt="Add" className="text-black ml-2" />
                </div>
              </button>
            </div>

            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
