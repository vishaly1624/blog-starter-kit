export default function Hero() {
    return (
        <section id="home" className="relative h-[80vh] flex items-center justify-center overflow-hidden">
            <img src="/images/bg.jpg" alt="Fresh Farm Produce" className="absolute inset-0 w-full h-full object-cover opacity-80" />
            <div className="absolute inset-0 bg-gradient-to-r from-green-900/60 to-transparent"></div>
            <h1 className="relative z-10 text-white text-5xl font-bold tracking-wide text-center px-4">
                Fresh From Farm
            </h1>
        </section>
    );
}