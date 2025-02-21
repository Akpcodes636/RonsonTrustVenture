"use client";
// import Image from "next/image";

export default function About() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#1E2A38]">
      {/* Hero Section with Background */}
      <div
        className="relative h-[800px] w-full flex flex-col justify-center items-center text-center text-white bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(30, 42, 56, 0.9), rgba(30, 42, 56, 0.9)), url('/image/oil.jpg')`,
        }}
      >
        <div className="container mx-auto px-4">
          <h1 className="text-5xl sm:text-6xl font-black uppercase mb-6 pt-[150px]">
            About Ronson Trust Ventures
          </h1>
          <p className="text-lg sm:text-xl max-w-3xl mx-auto text-[#C8CED2]">
            Ronson Trust Ventures has been a trusted name in the sales, repairs, and
            distribution of spare parts & marine equipment for decades. Our mission
            is to provide high-quality, reliable spare parts for various industries,
            ensuring seamless operations for our clients worldwide.
          </p>
        </div>
      </div>

      {/* Content Sections */}
      <div className="container mx-auto px-4 py-20">
        {/* History Section */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">
            Our Journey
          </h2>
          <p className="text-lg sm:text-xl text-[#C8CED2]">
            Established in 1990, Ronson Trust Ventures began with a vision to
            bridge the gap in the spare parts industry. Over the years, we have
            built strong partnerships with leading manufacturers and suppliers,
            expanding our reach across global markets.
          </p>
        </div>

        {/* Values Section */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="text-center p-6 bg-[#ECECEC] rounded-lg">
            <h3 className="text-2xl font-bold mb-4 text-[#1E2A38]">Quality First</h3>
            <p className="text-[#1E2A38]">
              We maintain the highest standards in our product selection and service delivery,
              ensuring every component meets industry specifications.
            </p>
          </div>
          <div className="text-center p-6 bg-[#ECECEC] rounded-lg">
            <h3 className="text-2xl font-bold mb-4 text-[#1E2A38]">Global Reach</h3>
            <p className="text-[#1E2A38]">
              Our extensive network allows us to serve clients worldwide, providing
              efficient solutions regardless of location.
            </p>
          </div>
          <div className="text-center p-6 bg-[#ECECEC] rounded-lg">
            <h3 className="text-2xl font-bold mb-4 text-[#1E2A38]">Customer Focus</h3>
            <p className="text-[#1E2A38]">
              We prioritize understanding and meeting our clients&apos; needs, offering
              personalized support and solutions.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto mt-20">
          <div className="text-center">
            <div className="text-4xl font-bold text-[#E72418] mb-2">20+</div>
            <div className="text-[#C8CED2]">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[#E72418] mb-2">1000+</div>
            <div className="text-[#C8CED2]">Global Clients</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[#E72418] mb-2">50+</div>
            <div className="text-[#C8CED2]">Countries Served</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[#E72418] mb-2">24/7</div>
            <div className="text-[#C8CED2]">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  );
}