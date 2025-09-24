export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-[80vh] flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <img
        src="/images/bg.jpg"
        alt="Fresh Farm Produce"
        className="absolute inset-0 w-full h-full object-cover opacity-80"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-900/60 to-transparent"></div>

      {/* Text Content */}
      <div className="relative z-10 text-white text-center px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-wide">
          AGRIBAZZAR
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold tracking-wide mt-4">
          Fresh From Farm
        </p>
      </div>
    </section>
  );
}