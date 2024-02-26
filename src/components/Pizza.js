export default function Pizza({ pizza }) {
  return (
    <div className="max-w-80 min-w-72">
      <img
        src={pizza.imageUrl}
        alt={pizza.altText}
        className="rounded-xl hover:scale-105 transition"
      />
      <p className="text-center text-2xl py-5 last:pb-0">{pizza.name}</p>
    </div>
  );
}
