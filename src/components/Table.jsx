import { tableData } from "../data/Navbar";

const Table = () => {
  return (
    <div className="mb-0 md:mb-8 mt-8 pb-4 md:pb-0">
      <div className="font-Space flex justify-between font-bold text-dark text-sm p-4 bg-lightAsh">
        <p>Payout ID</p>
        <p>Source</p>
        <p>Date</p>
        <p>Amount</p>
      </div>
      {tableData.map(({ id, date, amount, source, payoutId }) => {
        return (
          <div
            className="flex justify-between font-normal text-dark text-sm p-4 tableBorder"
            key={id}
          >
            <p>{payoutId}</p>
            <p>{source}</p>
            <p>{date}</p>
            <p>{amount}</p>
          </div>
        );
      })}
      <div className="p-4 border mt-10 md:mt-2 border-lightAsh rounded-sm w-full text-center">
        <button className="text-center font-semibold text-lightGreen text-base">
          See more
        </button>
      </div>
    </div>
  );
};

export { Table };
