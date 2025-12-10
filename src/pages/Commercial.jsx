import React from "react";
import Pagesbutton from "../components/Pagesbutton";

const Commercial = () => {
  return (
    <div className="w-full min-h-screen bg-white">

      <div
        className="relative w-full h-[80vh] overflow-hidden flex items-center"
        style={{
          clipPath:
            "polygon(0 0, 100% 0, 100% 80%, 75% 70%, 50% 78%, 25% 65%, 0 75%)",
        }}
      >
        {/* BACKGROUND IMAGE */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/landing2.jpg')" }}
        />

        {/* LARGE GRAY EDGE TEXT (NOT DARK) */}
        <h1
          className="
            absolute bottom-0 top-0 lg:-right-40
            text-gray-300/40 
            text-[6rem] md:text-[11rem] lg:text-[14rem] 
            font-extrabold 
            select-none 
            z-0
          "
          style={{ transform: "translate(20%, 20%)" }}
        >
          COMMERCIAL
        </h1>

        {/* HERO CONTENT CENTERED LEFT */}
        <div className="relative z-20 w-full flex flex-col gap-2 md:gap-4 px-5 md:px-10 bottom-15 md:bottom-20 lg:bottom-5 ">
          {/* MAIN HEADING */}
          <h1 className="text-white text-2xl md:text-5xl font-semibold ">
            Commercial Management
          </h1>

          {/* SUB TEXT */}
          <p className="text-white/90 text-sm md:text-xl lg:text-xl max-w-2xl drop-shadow-lg">
            Delivering industry-leading commercial expertise, cost efficiency,
            and strategic project alignment.
          </p>
        </div>

        {/* BUTTON PLACED IN PERFECT POSITION */}
        <div className="absolute left-40  bottom-40 md:left-140   lg:left-200 xl:left-330 xl:bottom-60 md:bottom-44 h-10 w-10">
          <Pagesbutton first="Services" second="Commercial" />
        </div>

      </div>

      {/* ------------------------------------------------------------
          NEW CONTENT SECTION (transparent water-glass container)
      ------------------------------------------------------------- */}
      <div className="w-full flex justify-center py-20 px-5">
        <div
          className="
            max-w-5xl w-full 
            bg-white/10 
            backdrop-blur-xl 
            rounded-3xl 
            border border-white/30 
            p-10 
            shadow-2xl 
            animate-float 
            relative
          "
          style={{
            boxShadow:
              "0 0 25px rgba(255,255,255,0.4), inset 0 0 25px rgba(255,255,255,0.3)",
          }}
        >
          

          <h2 className="text-3xl md:text-5xl xl:text-6xl font-semibold text-gray-700 mb-4">
            Our Commercial Expertise
          </h2>

          <div className="flex flex-col gap-10">
            <p className="text-gray-700 md:text-lg leading-relaxed">
              Navtex Marine Services provides commercial management solutions for a wide array of vessels, with services including full chartering and marine accounting. Our commercial operations are backed by an integrated management platform that facilitates efficient planning, monitoring and performance analysis – Anywhere and anytime.</p>
            <p> We offer a full commercial management package from the fixture of vessels to post-fixture operations, assistance with crew management and sales & purchases. We have extensive experience in managing various vessel types including all tanker segments. Our operation teams are headed by ex-marine Masters with proven experience in the shipping industry. Our commercial management team is highly trained and skilled to manage risks and provides round the clock coverage to ensure optimal results.</p>
          </div>


        </div>
      </div>

      {/* FLOAT ANIMATION */}
      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0px); }
          }
          .animate-float {
            animation: float 6s ease-in-out infinite;
          }

          @keyframes pulseSlow {
            0% { opacity: 0.2; }
            50% { opacity: 0.5; }
            100% { opacity: 0.2; }
          }
          .animate-pulseSlow {
            animation: pulseSlow 3s ease-in-out infinite;
          }
        `}
      </style>

    </div>
  );
};

export default Commercial;
