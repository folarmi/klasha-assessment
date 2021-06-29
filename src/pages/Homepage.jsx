import { useState } from "react";

import logo from "../assets/logo.svg";
import notification from "../assets/notification.svg";
import harmburger from "../assets/harmburger.svg";
import closeButton from "../assets/closeButton.png";
import user from "../assets/user.svg";
import { PayoutHeader, Account, Table, Sidebar, Navbar } from "../components";

const Homepage = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => {
    setSidebar(!sidebar);
  };
  return (
    <div className="m-auto md:mx-10 mt-2 md:mt-6">
      <div className="md:flex">
        <div className="flex-none w-full md:w-64  pt-4 md:pt-10 px-4 md:px-10 sidebar h-16 md:h-screen">
          <div className="flex justify-between">
            <img src={logo} alt="logo" />
            {sidebar ? (
              <img
                src={closeButton}
                alt="harmburger"
                className="md:hidden"
                onClick={showSidebar}
              />
            ) : (
              <img
                src={harmburger}
                alt="harmburger"
                className="md:hidden"
                onClick={showSidebar}
              />
            )}
          </div>
          {sidebar && (
            <div className="w-full z-40 bg-brown ml-24">
              <Sidebar sidebar={sidebar} />
            </div>
          )}
          <div className="hidden md:block">
            <Navbar />
          </div>
        </div>
        <div className="flex-grow w-full md:w-16 bg-white px-2 md:px-10 shadow-md">
          <div className="flex justify-between items-center pt-4 md:pt-0">
            <section>
              <p className="font-bold text-lg font-dark mb-2">Balances</p>
              <p className="font-normal text-xs text-ash">
                Today, 19th October 2020
              </p>
            </section>

            <section className="flex">
              <img src={notification} alt="notification" className="mr-4" />
              <img src={user} alt="user" />
            </section>
          </div>

          <section className="mt-10 md:mt-28">
            <Account />
            <PayoutHeader />
            <Table />
          </section>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
