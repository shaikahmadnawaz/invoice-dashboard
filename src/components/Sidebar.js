import React from "react";
import Logo from "../assets/images/Logo.png";
import HomeIcon from "../assets/images/Home.png";
import Invoices from "../assets/images/Invoices.png";
import Customers from "../assets/images/Customers.png";
import Products from "../assets/images/Products.png";
import Recurring from "../assets/images/Recurring.png";
import Discount from "../assets/images/Discount.png";
import LeftArrow from "../assets/images/left-arrow.png";

const Sidebar = () => {
  return (
    <section>
      <div className="w-full h-full">
        <ul className="py-4 px-10 w-full md:w-[270px] h-auto bg-white shadow-lg mt-10 mr-20 mx-8 rounded-xl">
          <div className="bg-white rounded-lg flex p-4">
            <div className="bg-slate-200 rounded-full w-7 h-7 mr-7 flex justify-center items-center">
              <img src={LeftArrow} alt="" />
            </div>

            <img src={Logo} className="w-24" alt="logo" />
          </div>
          <li className="flex items-center font-bold hover:bg-violet-100 rounded-md px-6 mt-20 py-6 text-black my-4">
            <img src={HomeIcon} className="mr-4" alt="Home" />
            Home
          </li>
          <li className="flex items-center px-6 font-bold hover:bg-violet-100 rounded-md py-6 text-black my-4">
            <img src={Invoices} className="mr-4" alt="Invoices" />
            Invoices
          </li>
          <li className="flex items-center px-6 font-bold hover:bg-violet-100 rounded-md py-6 text-black my-4">
            <img src={Customers} className="mr-4" alt="Customers" />
            Customers
          </li>
          <li className="flex items-center px-6 font-bold hover:bg-violet-100 rounded-md py-6 text-black my-4">
            <img src={Products} className="mr-4" alt="Products" />
            Products
          </li>
          <li className="flex items-center px-6 font-bold hover:bg-violet-100 rounded-md py-6 text-black my-4">
            <img src={Recurring} className="mr-4" alt="Recurring" />
            Recurring
          </li>
          <li className="flex items-center px-6 font-bold hover:bg-violet-100 rounded-md py-6 text-black my-4">
            <img src={Discount} className="mr-4" alt="Discount" />
            Discount
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Sidebar;
