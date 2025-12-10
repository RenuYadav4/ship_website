import React from 'react';
import { HiChevronDoubleRight } from 'react-icons/hi';

const AboutUs = () => {
    const rows = 5; // number of rows
    const cols = 5; // number of columns

    return (
        <div className="relative w-full">

            {/* HEADING */}
            <div className="w-full text-center -mt-5 md:-mt-9 lg:-mt-12 relative z-20 px-4">
                <h1 className="text-[22px] md:text-5xl lg:text-7xl xl:text-8xl font-semibold 
                       text-orange-400 drop-shadow-[0_2px_6px_rgba(0,0,0,0.35)] blur-[0.3px]">
                    About NavTex Marine Pvt Ltd
                </h1>
            </div>

            {/* MAIN SECTION */}
            <div className="p-4 mt-10 md:p-15 xl:px-30">
                <div
                    className="relative xl:h-[75vh] rounded-3xl border-2 border-gray-300 overflow-hidden shadow-2xl flex flex-col lg:flex-row "
                    style={{
                        backgroundImage: "url('/about.jpg')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >
                    {/* LEFT CONTENT CARD */}
                    <div className="w-full lg:w-1/2 bg-white/95 p-8 md:p-12 rounded-3xl shadow-xl relative z-20 flex flex-col justify-start">
                        <h2 className="text-2xl md:text-4xl font-bold mb-5 text-orange-400">Who We Are</h2>
                        <p className="text-gray-700 text-xs md:text-[16px] lg:text-[13px] xl:text-[16px] leading-relaxed mb-5">
                            We have extended our services in the recent past and now are engaged in various other aspects including training and document issuing, still complying with our general motto of quality management. We committed to provide management services to the shipping industry. We are committed to providing our clients around the world with reliable, flexible shipping solutions based on expertise. We maintain long term partnerships with our companies or clients and customers to delivering a range of services adapted to meet their specific needs. We deliver a professional, efficient service tailored to the specific needs of your business. Our services are designed around you. The Company’s strong and experienced management team oversees the focused delivery of management services. including the recruitment and sourcing of crew, purchasing, accounting, payroll management, technical services including audits and surveys. In addition, a finance team capable of delivering detailed financial reporting in line with clients’ requirements.
                        </p>

                        {/* Diagonal accent line */}
                        <div className="absolute left-0 bottom-0 w-2/3 h-1 bg-orange-400/80 skew-x-12 rounded-lg"></div>

                        {/* Floating decorative circles */}
                        <div className="absolute -top-10 -left-10 w-20 h-20 bg-orange-200/30 rounded-full blur-3xl animate-float-slow"></div>
                        <div className="absolute -bottom-12 -left-12 w-28 h-28 bg-gray-200/20 rounded-full blur-4xl animate-float-slow"></div>

                        {/* button */}
                        <div className='flex gap-3 items-center justify-center bg-blue-300 text-xl text-white mt-5 font-semibold hover:bg-transparent hover:border-2 border-blue-300 hover:text-blue-300 cursor-pointer w-40 py-4'>
                            <button >
                                Read More
                            </button>
                            <HiChevronDoubleRight />
                        </div>

                    </div>

                    {/* RIGHT GRID BOX AREA - hidden on small/medium */}
                    <div className="hidden lg:flex lg:w-1/2 relative items-center justify-center p-6 md:p-10 mt-6 lg:mt-0">
                        {/* Grid of boxes */}
                        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2 w-full h-full relative z-10">
                            {Array.from({ length: rows * cols }).map((_, i) => (
                                <div
                                    key={i}
                                    className={`rounded-md border border-gray-300 ${i % 2 === 0 ? 'bg-gray-400/30' : 'bg-transparent'
                                        } aspect-square`}
                                ></div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* FLOATING ANIMATION */}
            <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        .animate-float-slow {
          animation: float-slow 6s ease-in-out infinite;
        }
      `}</style>

        </div>
    );
};

export default AboutUs;
