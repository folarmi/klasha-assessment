import search from "../assets/search.svg";
import calendar from "../assets/calendar.svg";

const PayoutHeader = () => {
  return (
    <div className="lg:flex justify-between w-full mt-8">
      <p className="font-bold text-lg text-dark text-center mb-4 lg:mb-0 lg:text-left">
        Payout table
      </p>
      <div className="flex md:justify-between">
        <div className="w-full mr-6">
          <img src={search} alt="search" className="absolute ml-36 mt-4" />
          <input
            type="text"
            placeholder="Search something"
            className="border border-lightAsh rounded-sm p-2 text-ash font-normal text-sm"
          />
        </div>
        <div className="flex border border-lightAsh w-full items-center text-xs font-normal text-dark rounded-sm px-3 mr-2 md:mr-6">
          <p className="mr-2">March 2020</p>
          <img src={calendar} alt="" />
        </div>
        <button className="bg-lightGreen px-4 py-2 font-bold text-sm text-white rounded-sm">
          Payout
        </button>
      </div>
    </div>
  );
};

export { PayoutHeader };
