import pizzas from "../data/pizzas.json";
import Pizza from "./Pizza";

export default function Menu() {
  return (
    <section
      id="menu"
      aria
      className="flex justify-center flex-col items-center mb-10"
      aria-labelledby="menu"
    >
      <h2 className="text-center text-customBrown text-5xl lg:text-6xl font-bold uppercase py-10 font-Oswald">
        Menu
      </h2>
      <div
        id="pizza-layout"
        className="flex flex-row flex-wrap gap-10 justify-center"
      >
        {pizzas.map((pizza) => (
          <Pizza key={pizza.id} pizza={pizza} />
        ))}
      </div>
    </section>
  );
}
