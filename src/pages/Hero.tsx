export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <img
        src="/images/bg.jpg"
        alt="Fresh Farm Produce"
        className="absolute inset-0 w-full h-full object-cover sm:object-cover md:object-cover lg:object-cover"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-900/70 via-green-900/40 to-transparent"></div>

      {/* Text Content */}
      <div className="relative z-10 text-white text-center px-4 sm:px-6 lg:px-12">
        <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight drop-shadow-lg">
          AGRIBAZZAR
        </h1>
        <p className="mt-2 sm:mt-3 text-base sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl font-semibold tracking-wide drop-shadow-md">
          Fresh From Farm
        </p>
      </div>
    </section>
  );
}
