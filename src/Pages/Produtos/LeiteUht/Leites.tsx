import { useState, useEffect } from "react";
import bacgroundPagLeites from "../../../assets/assetsLeite/bacgroundPagLeites.svg";
import leites from "../../../assets/assetsLeite/leites3.png";

export function Leites() {
  const TypingEffect = () => {
    const [text, setText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(150);

    const phrases = ["linha leites uht"];

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
        backgroundImage: `url(${bacgroundPagLeites})`,
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
        <div className="flex items-center justify-center">
          <img
            className="w-5/6 cursor-pointer drop-shadow-2xl
             transition duration-300 hover:scale-105"
            src={leites}
            alt="Imagem de leites uht natville"
          />
        </div>
      </section>
      <section className="flex">
        <h1
          style={{ fontFamily: "Mocha Mattari W01 Regular" }}
          className="text-5xl text-blue-800 pl-6 flex"
        >
          leite uht integral
        </h1>
      </section>
    </main>
  );
}
