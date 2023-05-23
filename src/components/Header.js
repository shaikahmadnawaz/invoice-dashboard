import React from "react";
import Rectangle from "../assets/images/Rectangle30.png";
import DP from "../assets/images/dp.png";

const Header = () => {
  return (
    <section className="container mx-auto">
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
    </section>
  );
};

export default Header;
