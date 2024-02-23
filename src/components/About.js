import paragraphs from "../data/paragraphs.json";

export default function About() {
  return (
    <section id="about" className="mb-10" aria-labelledby="about">
      <h2 className="text-center text-customBrown text-5xl lg:text-6xl font-bold uppercase pb-10 font-Oswald">
        About
      </h2>
      <div className="lg:bg-customOrange lg:p-10 mb-5 lg:skew-x-3 rounded-md">
        {paragraphs.map((paragraph) => (
          <p key={paragraph.id} className="mb-5 last:mb-0 lg:-skew-x-3">
            {paragraph.content}
          </p>
        ))}
      </div>
      <div className="flex justify-center overflow-hidden">
        <img
          src="images/chefs-working.webp"
          alt="Pizza chefs fully immersed in their craft within a modern, bustling kitchen environment"
          className="w-3/5 max-w-2xl min-w-80 hover:grayscale hover:scale-105 transition-all duration-500"
        />
      </div>
    </section>
  );
}
