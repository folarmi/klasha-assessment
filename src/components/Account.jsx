import downArrow from "../assets/downArrow.svg";

const Account = () => {
  return (
    <div className="flex border border-lightAsh rounded-md w-3/4">
      <section className="m-2" style={{ flex: "1" }}>
        <div className="flex items-baseline justify-between border-b border-lightAsh">
          <p className="font-normal text-green text-sm pb-2">
            Total account balance
          </p>
          <div className="flex items-flex bg-lightAsh p-1 rounded-sm">
            <p className="font-normal text-sm text-dark mr-1 uppercase">usd</p>
            <img src={downArrow} alt="downArrow" />
          </div>
        </div>
        <div className="flex justify-between">
          <div className="my-4">
            <p className="font-bold text-3xl text-dark">$5,332.18</p>
            <p className="font-normal text-ash text-sm">1 USD = 381.97 NGN</p>
          </div>
          <div className="border border-lightAsh rounded-sm pl-1">
            <p className="border-b border-lightAsh font-medium text-sm uppercase">
              kes
            </p>
            <p className="border-b border-lightAsh font-medium text-sm uppercase">
              ngn
            </p>
            <p className="font-medium text-sm uppercase">ghc</p>
          </div>
        </div>
      </section>
      <section className="bg-primary p-2 rounded-md" style={{ flex: "1" }}>
        <p className="text-dark font-normal text-sm border-b border-lightAsh pb-2">
          Funds on hold
        </p>
        <p className="font-bold text-dark text-3xl py-6">$5,332.18</p>
      </section>
    </div>
  );
};

export { Account };
