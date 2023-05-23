import React from "react";
import Plus from "../assets/images/plus.png";
import Search from "../assets/images/search.png";
import Table from "../components/Table";

const Main = () => {
  return (
    <div>
      <div className="w-full bg-white h-full px-10 py-14">
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
            <p className="my-10 text-zinc-500 uppercase">recurring revenue</p>
            <h2 className="mt-14 font-extrabold text-2xl">€2500/month</h2>
          </div>
          <div className="w-full md:w-80 h-48 bg-zinc-100 text-center">
            <p className="my-10 text-zinc-500 uppercase">recurring overdue</p>
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
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Main;
