import React from "react";
import Client from "../assets/images/table-logo.png";
import TableArrow from "../assets/images/TableArrow.png";

const Table = () => {
  return (
    <section>
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
                  <img src={Client} alt="" className="w-[55px] h-[55px] mr-3" />
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
    </section>
  );
};

export default Table;
