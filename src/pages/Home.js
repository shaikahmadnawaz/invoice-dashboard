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
import Search from "../assets/images/search.png";
import Client from "../assets/images/table-logo.png";
import TableArrow from "../assets/images/TableArrow.png";
import LeftArrow from "../assets/images/left-arrow.png";

const Home = () => {
  return (
    <section>
      <div className="container mx-auto">
        <div className="relative">
          <img src={Rectangle} className="w-full" alt="banner" />
          <div className="absolute bottom-8 left-96 top-4 right-0 mx-4">
            <div className="rounded-lg p-4 flex items-center justify-between">
              <div className="bg-white rounded-lg p-4 ml-4">
                <div className="flex flex-row justify-center items-center">
                  <label htmlFor="" className="text-black mr-4">
                    Last 30 days:
                  </label>
                  <div className="bg-green-400 mr-2 text-white rounded-lg px-4 py-2">
                    <span className="uppercase">Paid</span>
                    <br />
                    €24,000
                  </div>
                  <div className="bg-slate-400 mr-2 text-white px-4 py-2 rounded-lg">
                    <span className="uppercase">Pending</span>
                    <br />
                    €41,000
                  </div>
                  <div className="bg-red-400 px-4 text-white py-2 rounded-lg">
                    <span className="uppercase">Overdue</span>
                    <br />
                    €65,600
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
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/4 h-full">
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
          <div className="w-full md:w-3/4 bg-white h-full px-10 py-14">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <h1 className="font-extrabold text-4xl mb-6 md:mb-0">
                Recurring Invoices
              </h1>
              <button className="bg-black flex rounded-md px-6 py-5 justify-center items-center">
                <div className="flex justify-center items-center">
                  <span className="text-white">Add Recurring Invoice</span>
                  <img src={Plus} alt="Add" className="text-black ml-2" />
                </div>
              </button>
            </div>

            <div className="flex flex-col md:flex-row justify-center my-14 items-center">
              <div className="w-full md:w-80 h-48 bg-zinc-100 text-center mb-8 md:mb-0">
                <p className="my-10 text-zinc-500 uppercase">
                  # recurring invoices
                </p>
                <h2 className="mt-14 font-extrabold text-2xl">215</h2>
              </div>
              <div className="w-full md:w-80 h-48 mx-0 md:mx-8 bg-zinc-100 text-center mb-8 md:mb-0">
                <p className="my-10 text-zinc-500 uppercase">
                  recurring revenue
                </p>
                <h2 className="mt-14 font-extrabold text-2xl">€2500/month</h2>
              </div>
              <div className="w-full md:w-80 h-48 bg-zinc-100 text-center">
                <p className="my-10 text-zinc-500 uppercase">
                  recurring overdue
                </p>
                <h2 className="mt-14 font-extrabold text-2xl">22</h2>
              </div>
            </div>

            <div>
              <h2 className="font-bold text-3xl mb-6">Per client</h2>
              <div className="flex">
                <input
                  type="text"
                  placeholder="Search client"
                  className="py-3 w-full md:w-64 px-3 outline-none bg-zinc-200 mb-2 md:mb-0"
                />
                <button className="bg-black flex rounded-md px-6 py-3 justify-center items-center ml-2">
                  <div className="flex justify-center items-center">
                    <span className="text-white">Search</span>
                    <img src={Search} alt="Add" className="text-black ml-2" />
                  </div>
                </button>
              </div>

              <div className="mx-auto mt-7">
                <table className="table-auto w-full">
                  <thead>
                    <tr className="text-zinc-500">
                      <th className="border-b text-start uppercase border-gray-300 px-8 py-2">
                        Client
                      </th>
                      <th className="border-b uppercase text-start border-gray-300 px-8 py-2">
                        # send
                      </th>
                      <th className="border-b uppercase text-start border-gray-300 px-6 py-2">
                        End date
                      </th>
                      <th className="border-b uppercase text-start border-gray-300 px-8 py-2">
                        Interval
                      </th>
                      <th className="border-b uppercase text-start border-gray-300 px-6 py-2">
                        Amount
                      </th>
                      <th className="border-b uppercase text-start border-gray-300 px-8 py-2">
                        Edit
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {Array.from({ length: 6 }, (_, index) => (
                      <tr key={index}>
                        <td className="border-b text-black border-gray-300 flex justify-center items-center font-semibold pr-10 py-2">
                          <img
                            src={Client}
                            alt=""
                            className="w-[55px] h-[55px] mr-3"
                          />
                          MadeByMack
                        </td>
                        <td className="border-b text-center font-semibold px-8 border-gray-300 py-2">
                          25
                        </td>
                        <td className="border-b text-center font-semibold border-gray-300 px-6 py-2">
                          24-20-2024
                        </td>
                        <td className="border-b font-semibold border-gray-300 px-8 py-2">
                          3/month
                        </td>
                        <td className="border-b font-semibold border-gray-300 px-6 py-2">
                          €3000
                        </td>
                        <td className="border-b border-gray-300 px-8 py-2">
                          <button className="border border-black border-solid flex rounded-md px-6 py-3 justify-center items-center">
                            <div className="flex justify-center items-center">
                              <span className="text-black">Edit</span>
                              <img
                                src={TableArrow}
                                alt="Add"
                                className="text-black ml-2"
                              />
                            </div>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
