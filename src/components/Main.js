import Menu from "../components/Menu";
import About from "../components/About";

export default function Main() {
  return (
    <main className="overflow-hidden flex justify-center">
      <div className="w-2/3 max-w-6xl min-w-2/5">
        <Menu />
        <About />
      </div>
    </main>
  );
}
