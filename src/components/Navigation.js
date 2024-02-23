export default function Navigation() {
  return (
    <nav className="h-full w-2/3 max-w-xs min-w-2/5 mx-auto">
      <ul className="opacity-0 lg:opacity-100 flex justify-center items-center mb-0 lg:mb-10 transition-all ease-in-out">
        <li className="text-customYellow text-4xl uppercase hover:brightness-90 transition w-full text-center font-Oswald">
          <a href="#menu">Menu</a>
        </li>
        <li className="text-customYellow text-4xl uppercase hover:brightness-90 transition w-full text-center font-Oswald">
          <a href="#about">About</a>
        </li>
      </ul>
    </nav>
  );
}
