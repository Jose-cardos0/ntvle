//logo

import campo from "../assets/campo.svg";
import coracao from "../assets/coracao.svg";

//slider
import { Slider } from "../Components/Slider";

//3d
import { Cheese3D } from "../Components/Cheese";

export function Home() {
  return (
    <main>
      <header
        style={{ backgroundImage: `url(${campo})` }}
        className="bg-no-repeat bg-bottom min-h-screen min-w-full
       flex items-center justify-center bg-[#56bac8]"
      >
        <Slider />
      </header>
      <section
        style={{ backgroundImage: `url(${coracao})` }}
        className="h-3/6 
       flex items-center justify-center bg-[#56bac8] bg-no-repeat bg-right 
      "
      >
        <h1
          className="text-blue-800 font-bold text-9xl"
          style={{ fontFamily: "Mocha Mattari W01 Regular" }}
        >
          CONHEÇA <br /> NOSSO CARRO <br />
          CHEFE
        </h1>
        <Cheese3D />
      </section>
    </main>
  );
}
