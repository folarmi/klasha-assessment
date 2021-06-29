import logo from "../assets/logo.svg";
import notification from "../assets/notification.svg";
import user from "../assets/user.svg";
import { PayoutHeader, Account, Table } from "../components";
import { general, mainPages } from "../data/Navbar";

const Homepage = () => {
  return (
    <div className="m-auto mx-10 mt-6">
      <div className="flex">
        <div className="flex-none w-64 pt-10 px-10 sidebar h-screen">
          <img src={logo} alt="logo" />
          <section className="mt-8">
            <p className="font-semibold text-base py-4 text-dark">Main pages</p>
            {mainPages.map(({ id, item, image }) => {
              return (
                <div className="flex py-4" key-={id}>
                  <img src={image} alt="item" className="mr-4" />
                  <p>{item}</p>
                </div>
              );
            })}
          </section>
          <p className="font-semibold text-base text-dark">General</p>
          {general.map(({ id, item, image }) => {
            return (
              <div className="flex py-4" key-={id}>
                <img src={image} alt="item" className="mr-4" />
                <p>{item}</p>
              </div>
            );
          })}
        </div>
        <div className="flex-grow w-16 bg-white px-10 shadow-md">
          <div className="flex justify-between items-center">
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

          <section className="mt-28">
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
