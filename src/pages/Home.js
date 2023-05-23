import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Main from "../components/Main";

const Home = () => {
  return (
    <main>
      <div className="container mx-auto">
        <Header />
        <div className="flex flex-col md:flex-row">
          <Sidebar />
          <Main />
        </div>
      </div>
    </main>
  );
};

export default Home;
