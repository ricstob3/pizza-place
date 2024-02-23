import Navigation from "./Navigation";
import Logo from "./Logo";

export default function Header() {
  return (
    <header
      id="header"
      className="bg-customRed overflow-hidden lg:overflow-auto"
    >
      <h1 className="text-center uppercase text-customYellow text-5xl lg:text-7xl pt-10 font-bold transition-all font-Oswald">
        Pizza Place
      </h1>
      <Logo />
      <Navigation />
    </header>
  );
}
