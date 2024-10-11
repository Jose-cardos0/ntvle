import { useRef, useEffect } from "react";
import { IoIosArrowDropdownCircle } from "react-icons/io";

//logo
import campo from "../assets/campo.svg";
import coracao from "../assets/coracao.svg";

//slider
import { Slider } from "../Components/Slider";

//3d
import { Cheese3D } from "../Components/Cheese";

export function Home() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const handleScrollToSection = () => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <main>
      <header
        style={{ backgroundImage: `url(${campo})` }}
        className="bg-no-repeat bg-bottom min-h-screen min-w-full
       flex items-center justify-center bg-[#56bac8] flex-col relative"
      >
        <Slider />
        <button
          onClick={handleScrollToSection}
          className="bg-[#56bac8] 
          rounded-full flex items-end
           absolute bottom-20 right-5 animate-pulse z-50 cursor-pointer"
        >
          <IoIosArrowDropdownCircle size={100} color="#003fa5" />
        </button>
      </header>
      <section
        ref={sectionRef}
        className="h-3/6 
       flex items-center justify-center bg-[#56bac8] bg-no-repeat bg-right 
      "
      >
        <h1
          className="text-blue-800 font-bold text-8xl flex items-center justify-center "
          style={{ fontFamily: "Mocha Mattari W01 Regular" }}
        >
          conheça <br /> nosso <br /> carro <br />
          chefe
        </h1>
        <div className="bg-no-repeat flex items-center justify-center relative w-1/2">
          <img className="absolute " src={coracao} alt="" />
          <Cheese3D />
        </div>
      </section>
      <section className="min-w-full h-screen flex items-center justify-center flex-col">
        <h1
          className="text-blue-800 font-bold text-8xl flex items-center justify-center "
          style={{ fontFamily: "Mocha Mattari W01 Regular" }}
        >
          conheça nossos produtos
        </h1>
        <div className=" grid grid-cols-4 gap-6 items-center justify-center m-auto ">
          <div className="w-96 h-96  rounded-lg shadow-xl transition duration-300 hover:scale-105 cursor-pointer">
            <h1>QUEIJOS</h1>
          </div>
          <div className="w-96 h-96  rounded-lg shadow-xl">
            <h1>QUEIJOS</h1>
          </div>
          <div className="w-96 h-96  rounded-lg shadow-xl">
            <h1>QUEIJOS</h1>
          </div>
          <div className="w-96 h-96  rounded-lg shadow-xl">
            <h1>QUEIJOS</h1>
          </div>
        </div>
      </section>
    </main>
  );
}
