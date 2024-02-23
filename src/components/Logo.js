export default function Logo() {
  return (
    <div className="h-full flex justify-center items-center">
      <img
        src="images/pizza-logo.png"
        alt="Pizza place logo"
        className="object-cover w-2/3 max-w-48 my-10 hover:scale-105 transition "
      />
    </div>
  );
}
