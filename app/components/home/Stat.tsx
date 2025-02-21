import { FaToolbox, FaUsers, FaGlobeAmericas, FaCheckCircle } from 'react-icons/fa';

export default function Statistics() {
  const statistics = [
    {
      icon: <FaToolbox className="w-12 h-12 text-[#C8CED2]" />,
      number: 5000,
      suffix: "+",
      label: "Spare Parts Supplied"
    },
    {
      icon: <FaUsers className="w-12 h-12 text-[#C8CED2]" />,
      number: 100,
      suffix: "+",
      label: "Satisfied Clients"
    },
    {
      icon: <FaGlobeAmericas className="w-12 h-12 text-[#C8CED2]" />,
      number: 20,
      suffix: "+",
      label: "Years Experience"
    },
    {
      icon: <FaCheckCircle className="w-12 h-12 text-[#C8CED2]" />,
      number: 98,
      suffix: "%",
      label: "Success Rate"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-[#1E2A38]">
      <div className="container mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#C8CED2]">
            Our Achievements in Numbers
          </h2>
          <div className="w-16 h-1 bg-[#C8CED2] mx-auto mt-4 mb-6 rounded-full"></div>
          <p className="text-lg text-[#C8CED2] max-w-2xl mx-auto">
            Delivering Excellence Through Quality Solutions and Trusted Partnerships
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {statistics.map((stat, index) => (
            <div key={index} className="p-8 bg-[#243443] text-center rounded-lg shadow-md border border-[#C8CED2]/20">
              <div className="mb-4 flex justify-center">
                <div className="p-4 bg-[#2E3A48] rounded-full">
                  {stat.icon}
                </div>
              </div>
              <div className="text-4xl font-bold text-white mb-2">
                {stat.number}{stat.suffix}
              </div>
              <div className="text-lg font-medium text-[#C8CED2]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Text */}
        <div className="text-center mt-12">
          <p className="text-[#C8CED2] max-w-2xl mx-auto">
            At Ronson Trust Venture, we take pride in our track record of delivering
            exceptional solutions and maintaining outstanding client satisfaction across all our services.
          </p>
        </div>
      </div>
    </section>
  );
}
