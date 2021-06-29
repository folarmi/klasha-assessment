import { general, mainPages } from "../data/Navbar";

const Navbar = () => {
  return (
    <div>
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
  );
};

export { Navbar };
