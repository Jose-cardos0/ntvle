import { useState, useEffect, useLayoutEffect } from "react";
import bacgroundPagQueijos from "../../../assets/assetsQueijos/backgroundQuijos.svg";

import queijoMussarela from "../../../assets/assetsQueijos/mussarela3.png";
import queijoPrato from "../../../assets/assetsQueijos/prato3.png";
import queijoCoalho from "../../../assets/assetsQueijos/coalho1.png";

//components
import { SliderQueijoMussarela } from "../../../Components/sliderQueijoMussarela";
import { SliderQueijoPrato } from "../../../Components/SliderQueijoPrato";
import { SliderQueijoCoalho } from "../../../Components/SliderQueijoCoalho";

//gsap
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function Queijos() {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to("#queijoMussarelaScroll", {
      x: 0,
      opacity: 1,
      duration: 6,
      scrollTrigger: {
        trigger: "#queijoMussarelaSection",
        markers: true,
        start: "top 700px",
        end: "bottom 900px",
        scrub: true,
      },
    });

    return () => {
      gsap.killTweensOf("#queijoMussarelaScroll");
    };
  }, []);

  const TypingEffect = () => {
    const [text, setText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(150);

    const phrases = ["linha de queijos"];

    useEffect(() => {
      const handleTyping = () => {
        const currentPhrase = phrases[loopNum % phrases.length];
        if (isDeleting) {
          setText((prev) => prev.substring(0, prev.length - 1));
          setTypingSpeed(50);
        } else {
          setText((prev) => currentPhrase.substring(0, prev.length + 1));
          setTypingSpeed(150);
        }

        if (!isDeleting && text === currentPhrase) {
          setTimeout(() => setIsDeleting(true), 1000);
        } else if (isDeleting && text === "") {
          setIsDeleting(false);
          setLoopNum((prev) => prev + 1);
        }
      };

      const typingTimeout = setTimeout(handleTyping, typingSpeed);

      return () => clearTimeout(typingTimeout);
    }, [text, isDeleting, loopNum, typingSpeed]);

    return (
      <h1
        style={{ fontFamily: "Mocha Mattari W01 Regular" }}
        className="text-9xl text-blue-800 text-center"
      >
        {text}
      </h1>
    );
  };

  return (
    <main
      style={{
        backgroundImage: `url(${bacgroundPagQueijos})`,
      }}
      className="min-h-screen bg-no-repeat bg-cover"
    >
      <section
        className="flex items-center justify-around 
        m-auto min-w-full min-h-screen pl-10"
      >
        <div className="flex w-1/2 items-center justify-center">
          <TypingEffect />
        </div>
        <div
          className="flex items-center
         justify-center w-5/6 overflow-hidden h-screen "
        >
          {/* <img
            className="w-5/6 cursor-pointer drop-shadow-2xl 
             transition duration-300 hover:scale-105 "
            src={leites}
            alt="Imagem de leites uht natville"
          /> */}
          <div className="relative w-3/4 h-full flex items-center justify-between">
            <img
              className="absolute drop-shadow-2xl z-10 left-0 
               cursor-pointer transition duration-300 hover:scale-105 hover:z-50 -rotate-3"
              src={queijoMussarela}
              alt="queijo mussarela"
              onClick={() => {
                const clickLink = document.getElementById(
                  "queijoMussarelaSection"
                );
                if (clickLink) {
                  clickLink.scrollIntoView({ behavior: "smooth" });
                }
              }}
            />
            <img
              className="absolute drop-shadow-2xl left-64 z-20 bottom-7 cursor-pointer transition duration-300 hover:scale-105 hover:z-50 "
              src={queijoPrato}
              alt="queijo prato"
              onClick={() => {
                const clickLink = document.getElementById("queijoPratoSection");
                if (clickLink) {
                  clickLink.scrollIntoView({ behavior: "smooth" });
                }
              }}
            />
            <div className=" flex items-center justify-center relative left-60 bottom-44 ">
              <img
                className="cursor-pointer drop-shadow-xl transition
                 duration-300 hover:scale-105 hover:z-50"
                src={queijoCoalho}
                alt="queijo de coalho"
                onClick={() => {
                  const clickLink = document.getElementById(
                    "queijoDeCoalhoSection"
                  );
                  if (clickLink) {
                    clickLink.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              />
            </div>
          </div>
        </div>
      </section>
      {/*QUEIJO MUSSARELA*/}
      <section
        id="queijoMussarelaSection"
        className="flex-col  
        min-w-full py-10 items-center justify-center m-auto"
      >
        <div className="flex items-center justify-center m-auto">
          <h1
            style={{ fontFamily: "Mocha Mattari W01 Regular" }}
            className="text-8xl text-center w-full text-blue-800 "
          >
            queijo mussarela
          </h1>
        </div>
        <div
          id="queijoMussarelaScroll"
          className="flex items-center justify-center m-auto"
        >
          <div className="z-0 w-2/4">
            <SliderQueijoMussarela />
          </div>
          <div className=" flex items-center justify-center z-50">
            <div className="w-full">
              {/*TABELA NUTRICIONAL*/}
              <h1
                style={{ fontFamily: "Mocha Mattari W01 Regular" }}
                className="text-5xl text-blue-800 text-center"
              >
                informações técnicas
              </h1>
              <div className="overflow-x-auto shadow-2xl">
                <div className="bg-blue-100 p-2">
                  <p className="">Porções por embalagem: 5</p>
                  <p className="">Porção: 200ml (1 copo)</p>
                </div>
                <table className="min-w-full border-collapse text-left ">
                  <thead className="bg-blue-100">
                    <tr>
                      <th className="border-b-2 border-gray-300 px-4 py-2 uppercase"></th>
                      <th className="border-b-2 border-gray-300 px-4 py-2">
                        100 ml
                      </th>
                      <th className="border-b-2 border-gray-300 px-4 py-2">
                        200 ml
                      </th>
                      <th className="border-b-2 border-gray-300 px-4 py-2">
                        % VD (*)
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white">
                      <td className="border px-4 py-2">
                        Valor energético (kcal)
                      </td>
                      <td className="border px-4 py-2">57</td>
                      <td className="border px-4 py-2">114</td>
                      <td className="border px-4 py-2">6</td>
                    </tr>
                    <tr className="bg-blue-100">
                      <td className="border px-4 py-2">
                        Carboidratos totais (g)
                      </td>
                      <td className="border px-4 py-2">4,5</td>
                      <td className="border px-4 py-2">9</td>
                      <td className="border px-4 py-2">3</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border px-4 py-2">Açúcares totais (g)</td>
                      <td className="border px-4 py-2">4,5</td>
                      <td className="border px-4 py-2">9</td>
                      <td className="border px-4 py-2">3</td>
                    </tr>
                    <tr className="bg-blue-100">
                      <td className="border px-4 py-2">
                        Açúcares adicionados (g)
                      </td>
                      <td className="border px-4 py-2">0</td>
                      <td className="border px-4 py-2">0</td>
                      <td className="border px-4 py-2">0</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border px-4 py-2">Proteínas (g)</td>
                      <td className="border px-4 py-2">3</td>
                      <td className="border px-4 py-2">6</td>
                      <td className="border px-4 py-2">8</td>
                    </tr>
                    <tr className="bg-blue-100">
                      <td className="border px-4 py-2">Gorduras totais (g)</td>
                      <td className="border px-4 py-2">3</td>
                      <td className="border px-4 py-2">6</td>
                      <td className="border px-4 py-2">11</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border px-4 py-2">
                        Gorduras saturadas (g)
                      </td>
                      <td className="border px-4 py-2">1,8</td>
                      <td className="border px-4 py-2">3,6</td>
                      <td className="border px-4 py-2">16</td>
                    </tr>
                    <tr className="bg-blue-100">
                      <td className="border px-4 py-2">Gorduras trans (g)</td>
                      <td className="border px-4 py-2">0</td>
                      <td className="border px-4 py-2">0</td>
                      <td className="border px-4 py-2">0</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border px-4 py-2">Fibra alimentar (g)</td>
                      <td className="border px-4 py-2">0</td>
                      <td className="border px-4 py-2">0</td>
                      <td className="border px-4 py-2">0</td>
                    </tr>
                    <tr className="bg-blue-100">
                      <td className="border px-4 py-2">Sódio (mg)</td>
                      <td className="border px-4 py-2">56</td>
                      <td className="border px-4 py-2">112</td>
                      <td className="border px-4 py-2">5</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border px-4 py-2">Cálcio (mg)</td>
                      <td className="border px-4 py-2">88</td>
                      <td className="border px-4 py-2">176</td>
                      <td className="border px-4 py-2">18</td>
                    </tr>
                  </tbody>
                </table>
                <div className="bg-blue-100 p-2">
                  <p className="">
                    *Percentual de valores diários fornecidos pela porção.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex-col items-center justify-center ml-4">
              <div>
                <h2 className="text-blue-800 font-semibold text-xl uppercase">
                  Ingredientes
                </h2>
                <p className="">
                  Ingredientes: Leite UHT Integral, estabilizantes: <br />{" "}
                  citrato de sódio-INS331III, fosfato <br />{" "}
                  trissódico-INS339lll efosfato dissódico-INS339lll.
                </p>
              </div>
              <div>
                <h2 className="font-semibold">
                  NÃO CONTÉM GLÚTEN. <br />
                  ALÉRGICOS: CONTÉM LEITE, <br />
                  CONTÉM LACTOSE.
                </h2>
              </div>
              <div>
                <h2 className="text-blue-800  font-semibold text-xl uppercase">
                  conservação
                </h2>
                <p className="">• Conservar em local seco e arejado.</p>
                <p className="">
                  • Após aberto, conserve refrigerado por até 2 dias.
                </p>
                <p className="">• Não é necessário ferver este leite.</p>
              </div>
              <div>
                <h2 className="text-blue-800  font-semibold text-xl uppercase">
                  dados técnicos
                </h2>
                <div>
                  <p>Embalagem: 1 litro</p>
                  <p>GTIN-13: 7898387220380</p>
                  <p>Peso por caixa: 12 litros</p>
                  <p>GTIN-14: 17898387120387</p>
                  <p>Paletização: 15 x 5 caixas</p>
                  <p>Validade: 180 dias</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*QUEIJO PRATO */}
      <section
        id="queijoPratoSection"
        className="flex-col  min-w-full py-10 items-center justify-center mt-44"
      >
        <div className="flex items-center justify-center">
          <h1
            style={{ fontFamily: "Mocha Mattari W01 Regular" }}
            className="text-8xl text-center w-full text-blue-800 "
          >
            queijo prato
          </h1>
        </div>
        <div
          id="queijoPratoScroll"
          className="flex items-center justify-center m-auto"
        >
          <div className="z-0 w-2/4">
            <SliderQueijoPrato />
          </div>
          <div className="z-50 flex items-center justify-center">
            <div className="w-full">
              {/*TABELA NUTRICIONAL*/}
              <h1
                style={{ fontFamily: "Mocha Mattari W01 Regular" }}
                className="text-5xl text-blue-800 text-center"
              >
                tabela nutricional
              </h1>
              <div className="overflow-x-auto shadow-2xl">
                <div className="bg-blue-100 p-2">
                  <p className="">Porções por embalagem: 5</p>
                  <p className="">Porção: 200ml (1 copo)</p>
                </div>
                <table className="min-w-full border-collapse text-left ">
                  <thead className="bg-blue-100">
                    <tr>
                      <th className="border-b-2 border-gray-300 px-4 py-2 uppercase"></th>
                      <th className="border-b-2 border-gray-300 px-4 py-2">
                        100 ml
                      </th>
                      <th className="border-b-2 border-gray-300 px-4 py-2">
                        200 ml
                      </th>
                      <th className="border-b-2 border-gray-300 px-4 py-2">
                        % VD (*)
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white">
                      <td className="border px-4 py-2">
                        Valor energético (kcal)
                      </td>
                      <td className="border px-4 py-2">57</td>
                      <td className="border px-4 py-2">114</td>
                      <td className="border px-4 py-2">6</td>
                    </tr>
                    <tr className="bg-blue-100">
                      <td className="border px-4 py-2">
                        Carboidratos totais (g)
                      </td>
                      <td className="border px-4 py-2">4,5</td>
                      <td className="border px-4 py-2">9</td>
                      <td className="border px-4 py-2">3</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border px-4 py-2">Açúcares totais (g)</td>
                      <td className="border px-4 py-2">4,5</td>
                      <td className="border px-4 py-2">9</td>
                      <td className="border px-4 py-2">3</td>
                    </tr>
                    <tr className="bg-blue-100">
                      <td className="border px-4 py-2">
                        Açúcares adicionados (g)
                      </td>
                      <td className="border px-4 py-2">0</td>
                      <td className="border px-4 py-2">0</td>
                      <td className="border px-4 py-2">0</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border px-4 py-2">Proteínas (g)</td>
                      <td className="border px-4 py-2">3</td>
                      <td className="border px-4 py-2">6</td>
                      <td className="border px-4 py-2">8</td>
                    </tr>
                    <tr className="bg-blue-100">
                      <td className="border px-4 py-2">Gorduras totais (g)</td>
                      <td className="border px-4 py-2">3</td>
                      <td className="border px-4 py-2">6</td>
                      <td className="border px-4 py-2">11</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border px-4 py-2">
                        Gorduras saturadas (g)
                      </td>
                      <td className="border px-4 py-2">1,8</td>
                      <td className="border px-4 py-2">3,6</td>
                      <td className="border px-4 py-2">16</td>
                    </tr>
                    <tr className="bg-blue-100">
                      <td className="border px-4 py-2">Gorduras trans (g)</td>
                      <td className="border px-4 py-2">0</td>
                      <td className="border px-4 py-2">0</td>
                      <td className="border px-4 py-2">0</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border px-4 py-2">Fibra alimentar (g)</td>
                      <td className="border px-4 py-2">0</td>
                      <td className="border px-4 py-2">0</td>
                      <td className="border px-4 py-2">0</td>
                    </tr>
                    <tr className="bg-blue-100">
                      <td className="border px-4 py-2">Sódio (mg)</td>
                      <td className="border px-4 py-2">56</td>
                      <td className="border px-4 py-2">112</td>
                      <td className="border px-4 py-2">5</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border px-4 py-2">Cálcio (mg)</td>
                      <td className="border px-4 py-2">88</td>
                      <td className="border px-4 py-2">176</td>
                      <td className="border px-4 py-2">18</td>
                    </tr>
                  </tbody>
                </table>
                <div className="bg-blue-100 p-2">
                  <p className="">
                    *Percentual de valores diários fornecidos pela porção.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex-col items-center justify-center ml-4">
              <div>
                <h2 className="text-blue-800  font-semibold text-xl uppercase">
                  Ingredientes
                </h2>
                <p className="">
                  Ingredientes: Leite UHT Integral, estabilizantes: <br />{" "}
                  citrato de sódio-INS331III, fosfato <br />{" "}
                  trissódico-INS339lll efosfato dissódico-INS339lll.
                </p>
              </div>
              <div>
                <h2 className="font-semibold">
                  NÃO CONTÉM GLÚTEN. <br />
                  ALÉRGICOS: CONTÉM LEITE, <br />
                  CONTÉM LACTOSE.
                </h2>
              </div>
              <div>
                <h2 className="text-blue-800  font-semibold text-xl uppercase">
                  conservação
                </h2>
                <p className="">• Conservar em local seco e arejado.</p>
                <p className="">
                  • Após aberto, conserve refrigerado por até 2 dias.
                </p>
                <p className="">• Não é necessário ferver este leite.</p>
              </div>
              <div>
                <h2 className="text-blue-800  font-semibold text-xl uppercase">
                  dados técnicos
                </h2>
                <div>
                  <p>Embalagem: 1 litro</p>
                  <p>GTIN-13: 7898387220380</p>
                  <p>Peso por caixa: 12 litros</p>
                  <p>GTIN-14: 17898387120387</p>
                  <p>Paletização: 15 x 5 caixas</p>
                  <p>Validade: 180 dias</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*QUEIJO DE COALHO */}
      <section
        id="queijoDeCoalhoSection"
        className="flex-col  min-w-full py-10 items-center justify-center mt-44"
      >
        <div className="flex items-center justify-center">
          <h1
            style={{ fontFamily: "Mocha Mattari W01 Regular" }}
            className="text-8xl text-center w-full text-blue-800 "
          >
            queijo de coalho
          </h1>
        </div>
        <div
          id="queijoDeCoalhoScroll"
          className="flex items-center justify-center m-auto"
        >
          <div className="z-0 w-2/4">
            <SliderQueijoCoalho />
          </div>
          <div className="z-50 flex items-center justify-center">
            <div className="w-full">
              {/*TABELA NUTRICIONAL*/}
              <h1
                style={{ fontFamily: "Mocha Mattari W01 Regular" }}
                className="text-5xl text-blue-800 text-center"
              >
                tabela nutricional
              </h1>
              <div className="overflow-x-auto shadow-2xl">
                <div className="bg-blue-100 p-2">
                  <p className="">Porções por embalagem: 5</p>
                  <p className="">Porção: 200ml (1 copo)</p>
                </div>
                <table className="min-w-full border-collapse text-left ">
                  <thead className="bg-blue-100">
                    <tr>
                      <th className="border-b-2 border-gray-300 px-4 py-2 uppercase"></th>
                      <th className="border-b-2 border-gray-300 px-4 py-2">
                        100 ml
                      </th>
                      <th className="border-b-2 border-gray-300 px-4 py-2">
                        200 ml
                      </th>
                      <th className="border-b-2 border-gray-300 px-4 py-2">
                        % VD (*)
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white">
                      <td className="border px-4 py-2">
                        Valor energético (kcal)
                      </td>
                      <td className="border px-4 py-2">57</td>
                      <td className="border px-4 py-2">114</td>
                      <td className="border px-4 py-2">6</td>
                    </tr>
                    <tr className="bg-blue-100">
                      <td className="border px-4 py-2">
                        Carboidratos totais (g)
                      </td>
                      <td className="border px-4 py-2">4,5</td>
                      <td className="border px-4 py-2">9</td>
                      <td className="border px-4 py-2">3</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border px-4 py-2">Açúcares totais (g)</td>
                      <td className="border px-4 py-2">4,5</td>
                      <td className="border px-4 py-2">9</td>
                      <td className="border px-4 py-2">3</td>
                    </tr>
                    <tr className="bg-blue-100">
                      <td className="border px-4 py-2">
                        Açúcares adicionados (g)
                      </td>
                      <td className="border px-4 py-2">0</td>
                      <td className="border px-4 py-2">0</td>
                      <td className="border px-4 py-2">0</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border px-4 py-2">Proteínas (g)</td>
                      <td className="border px-4 py-2">3</td>
                      <td className="border px-4 py-2">6</td>
                      <td className="border px-4 py-2">8</td>
                    </tr>
                    <tr className="bg-blue-100">
                      <td className="border px-4 py-2">Gorduras totais (g)</td>
                      <td className="border px-4 py-2">3</td>
                      <td className="border px-4 py-2">6</td>
                      <td className="border px-4 py-2">11</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border px-4 py-2">
                        Gorduras saturadas (g)
                      </td>
                      <td className="border px-4 py-2">1,8</td>
                      <td className="border px-4 py-2">3,6</td>
                      <td className="border px-4 py-2">16</td>
                    </tr>
                    <tr className="bg-blue-100">
                      <td className="border px-4 py-2">Gorduras trans (g)</td>
                      <td className="border px-4 py-2">0</td>
                      <td className="border px-4 py-2">0</td>
                      <td className="border px-4 py-2">0</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border px-4 py-2">Fibra alimentar (g)</td>
                      <td className="border px-4 py-2">0</td>
                      <td className="border px-4 py-2">0</td>
                      <td className="border px-4 py-2">0</td>
                    </tr>
                    <tr className="bg-blue-100">
                      <td className="border px-4 py-2">Sódio (mg)</td>
                      <td className="border px-4 py-2">56</td>
                      <td className="border px-4 py-2">112</td>
                      <td className="border px-4 py-2">5</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border px-4 py-2">Cálcio (mg)</td>
                      <td className="border px-4 py-2">88</td>
                      <td className="border px-4 py-2">176</td>
                      <td className="border px-4 py-2">18</td>
                    </tr>
                  </tbody>
                </table>
                <div className="bg-blue-100 p-2">
                  <p className="">
                    *Percentual de valores diários fornecidos pela porção.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex-col items-center justify-center ml-4">
              <div>
                <h2 className="text-blue-800  font-semibold text-xl uppercase">
                  Ingredientes
                </h2>
                <p className="">
                  Ingredientes: Leite UHT Integral, estabilizantes: <br />{" "}
                  citrato de sódio-INS331III, fosfato <br />{" "}
                  trissódico-INS339lll efosfato dissódico-INS339lll.
                </p>
              </div>
              <div>
                <h2 className="font-semibold">
                  NÃO CONTÉM GLÚTEN. <br />
                  ALÉRGICOS: CONTÉM LEITE, <br />
                  CONTÉM LACTOSE.
                </h2>
              </div>
              <div>
                <h2 className="text-blue-800  font-semibold text-xl uppercase">
                  conservação
                </h2>
                <p className="">• Conservar em local seco e arejado.</p>
                <p className="">
                  • Após aberto, conserve refrigerado por até 2 dias.
                </p>
                <p className="">• Não é necessário ferver este leite.</p>
              </div>
              <div>
                <h2 className="text-blue-800  font-semibold text-xl uppercase">
                  dados técnicos
                </h2>
                <div>
                  <p>Embalagem: 1 litro</p>
                  <p>GTIN-13: 7898387220380</p>
                  <p>Peso por caixa: 12 litros</p>
                  <p>GTIN-14: 17898387120387</p>
                  <p>Paletização: 15 x 5 caixas</p>
                  <p>Validade: 180 dias</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
