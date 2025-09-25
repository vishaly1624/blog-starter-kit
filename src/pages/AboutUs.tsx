export default function AboutUs() {
  return (
    <section
      id="about"
      className="px-6 py-16 bg-white text-gray-800"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4 tracking-wide text-green-900">
          About Us
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          At{" "}
          <span className="font-semibold text-green-800">AGRIBAZZAR</span>, we
          connect consumers directly with farmers to bring{" "}
          <span className="font-semibold">fresh, organic, and sustainable</span>{" "}
          agricultural products to your doorstep. Our mission is to make healthy
          eating simple and accessible.
        </p>
        <p className="mt-6 text-md text-gray-500 leading-relaxed">
          We prioritize quality, sustainability, and transparency. From grains
          and vegetables to fruits and farm essentials,{" "}
          <span className="font-semibold text-green-800">AGRIBAZZAR</span>{" "}
          ensures you get the best from farm to table.
        </p>
      </div>
    </section>
  );
}
