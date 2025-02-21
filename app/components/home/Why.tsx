"use client";

export default function Why() {
    return (
        <section className="py-20 bg-[#ECECEC] border-b border-gray-300">
            <div className="container mx-auto px-6 md:px-10">
                {/* Section Title */}
                <div className="text-center mb-12">
                    <p className="tracking-widest font-medium text-gray-700 uppercase body-text">
                        Our Clients Love Us
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold text-black mt-2 heading">
                        Why Choose <span className="text-[#E72418]">Ronson Trust Venture?</span>
                    </h2>
                    <div className="w-20 h-1 bg-[#E72418] mx-auto mt-4 rounded-full" />
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Reliability & Expertise */}
                    <div className="bg-white p-8 rounded-xl border border-gray-300 shadow-sm hover:shadow-md 
                                    transition-all duration-300 transform hover:-translate-y-2 cursor-pointer">
                        <h3 className="text-xl font-semibold text-black mb-3 heading">
                            Reliability & Expertise
                        </h3>
                        <p className="text-gray-700 body-text">
                            Our dedicated team has the expertise to not only meet but exceed your expectations, 
                            ensuring high-quality service delivery that aligns with your business needs.
                        </p>
                    </div>

                    {/* Quality Assurance */}
                    <div className="bg-white p-8 rounded-xl border border-gray-300 shadow-sm hover:shadow-md 
                                    transition-all duration-300 transform hover:-translate-y-2 cursor-pointer">
                        <h3 className="text-xl font-semibold text-black mb-3 heading">
                            Quality Assurance
                        </h3>
                        <p className="text-gray-700 body-text">
                            We ensure that every product and service meets industry standards. 
                            Our policies prioritize thorough evaluations to guarantee compliance 
                            with customer requirements.
                        </p>
                    </div>

                    {/* HSE Compliance */}
                    <div className="bg-white p-8 rounded-xl border border-gray-300 shadow-sm hover:shadow-md 
                                    transition-all duration-300 transform hover:-translate-y-2 cursor-pointer">
                        <h3 className="text-xl font-semibold text-black mb-3 heading">
                            HSE Compliance
                        </h3>
                        <p className="text-gray-700 body-text">
                            Safety is our priority. We are committed to protecting our personnel, 
                            equipment, and the communities where we operate, ensuring an accident-free 
                            project delivery.
                        </p>
                    </div>
                </div>

                {/* Bottom Text */}
                <div className="text-center mt-12">
                    <p className="text-gray-700 max-w-2xl mx-auto body-text">
                        At Ronson Trust Venture, we stand out by delivering top-tier services with 
                        a focus on <span className="font-semibold">quality, reliability, and safety.</span>
                    </p>
                </div>
            </div>
        </section>
    );
}
