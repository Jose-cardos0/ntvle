import { useLayoutEffect } from "react";
//logo
import campo from "../assets/campo.svg";
import coracao from "../assets/coracao.svg";
import bgprodutos from "../assets/bgprodutos.png";
import integralBg from "../assets/integralBg.png";
import zeroBg from "../assets/bglinhas/zeroBg_1.png";
import desnBg from "../assets/bglinhas/desnBg_1.png";
import leitesBg from "../assets/bglinhas/leites_1.png";
import queijosBg from "../assets/bglinhas/queijos.png";
import manteigasBg from "../assets/bglinhas/manteigas.png";
import integralBg2 from "../assets/bglinhas/integralBg2.png";
import leitesEmPo from "../assets/bglinhas/empo.png";

import vacaBracosAbertos from "../assets/vacaBracosAbertos.svg";

//slider
import { Slider } from "../Components/Slider";

//3d
import { Cheese3D } from "../Components/Cheese";

//icons
import { LiaArrowAltCircleDownSolid } from "react-icons/lia";

//gsap

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function Home() {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to("#textoGsapQueijo3d", {
      x: 0,
      opacity: 1,
      duration: 6,
      scrollTrigger: {
        trigger: "#startScroll",
        markers: true,
        start: "top 200px",
        end: "bottom 850px",
        scrub: true,
      },
    });

    return () => {
      gsap.killTweensOf("#textoGsapQueijo3d");
    };
  }, []);

  return (
    <main>
      <header
        style={{ backgroundImage: `url(${campo})` }}
        className="bg-no-repeat bg-bottom min-h-screen min-w-full
       flex items-center justify-center bg-[#56bac8] flex-col relative"
      >
        <Slider />

        <button
          onClick={() => {
            window.scrollTo({
              top: window.scrollY + window.innerHeight,
              behavior: "smooth",
            });
          }}
          className=" 
          rounded-full flex items-end animate-bounce
          fixed bottom-10 right-5  z-50 cursor-pointer flex-col"
        >
          <div className="flex justify-center">
            <img className="w-40 mr-5" src={vacaBracosAbertos} alt="" />
          </div>
          <div
            className="flex items-center justify-center pr-4 bg-white shadow-2xl
            rounded-full hover:bg-[#56bac8] hover:shadow-xl "
          >
            <LiaArrowAltCircleDownSolid size={60} color="#003fa5" />
            <strong className="text-blue-800">VEJA MAIS</strong>
          </div>
        </button>
      </header>
      <section
        id="startScroll"
        className="h-3/6 
       flex items-center justify-center bg-[#56bac8] bg-no-repeat bg-right 
      "
      >
        <h1
          id="textoGsapQueijo3d"
          className="text-blue-900 font-bold text-8xl flex items-center justify-center "
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
      <section
        style={{
          backgroundImage: `url(${bgprodutos})`,
        }}
        className="min-w-full 
        h-screen flex 
        items-center justify-center 
        flex-col bg-cover bg-center "
      >
        <h1
          style={{
            fontFamily: "Mocha Mattari W01 Regular",
          }}
          className="text-blue-900 font-bold text-8xl flex
           items-center justify-center drop-shadow-2xl
           "
        >
          nossas linhas de produtos
        </h1>
        <div
          className=" grid grid-cols-4 gap-6
         items-center justify-center
          m-auto "
        >
          <div
            style={{ backgroundImage: `url(${integralBg})` }}
            className="w-96 h-96  rounded-lg shadow-xl
           bg-cover bg-center items-center justify-center flex"
          >
            <img
              className="max-w-64 transition duration-300 hover:scale-105 
          cursor-pointer hover:drop-shadow-2xl"
              src={leitesBg}
              alt=""
            />
          </div>
          <div
            style={{ backgroundImage: `url(${desnBg})` }}
            className="w-96 h-96  rounded-lg shadow-xl
           bg-cover bg-center items-center justify-center flex"
          >
            <img
              className="max-w-96 transition duration-300 hover:scale-105 
          cursor-pointer hover:drop-shadow-2xl"
              src={queijosBg}
              alt=""
            />
          </div>
          <div
            style={{ backgroundImage: `url(${zeroBg})` }}
            className="w-96 h-96  rounded-lg shadow-xl
           bg-cover bg-center items-center justify-center flex"
          >
            <img
              className="max-w-64 transition duration-300 hover:scale-105 
          cursor-pointer hover:drop-shadow-2xl"
              src={manteigasBg}
              alt=""
            />
          </div>
          <div
            style={{ backgroundImage: `url(${integralBg2})` }}
            className="w-96 h-96  rounded-lg shadow-xl
           bg-cover bg-center items-center justify-center flex"
          >
            <img
              className=" transition duration-300 hover:scale-105 
          cursor-pointer hover:drop-shadow-2xl"
              src={leitesEmPo}
              alt=""
            />
          </div>
        </div>
      </section>
    </main>
  );
}
