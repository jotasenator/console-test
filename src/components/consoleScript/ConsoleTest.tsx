import React, { useEffect, useState } from "react";
import Yes from "../Yes";

declare global {
  interface Window {
    OK: () => void;
    SUM: (a: number, b: number, c: number) => number;
  }
}

const ConsoleTest = () => {
  const [a, b, c] = [2, 3, 4];

  const [isCorrectAnswer, setIsCorrectAnswer] = useState(false);

  useEffect(() => {
    console.log(
      "1.-Escribe una funcion tradicional con el nombre SUM que tome 3 valores y retorne los valores sumados"
    );
    console.log(
      "2.-Cuando termines de definir la funcion SUM escribe OK() para dar por terminada la respuesta"
    );

    window.OK = function () {
      if (typeof window.SUM === "function") {
        let respuesta = window.SUM(a, b, c);
        if (respuesta === a + b + c) {
          console.log(
            "%c¡Correcto! Has resuelto el ejercicio.",
            "color: green"
          );
          setIsCorrectAnswer(true);
        } else {
          console.log(
            "%cRespuesta incorrecta. Intenta de nuevo.",
            "color: red"
          );
        }
      } else {
        console.log(
          "%cPor favor define la función SUM de la forma tradicional, si ya está definida presiona F5",
          "color: red"
        );
      }
    };
  }, []);

  return (
    <div>
      <h3>Inspecciona la consola del navegador y resuelve el ejercicio :)</h3>
      {isCorrectAnswer ? <Yes /> : ""}
    </div>
  );
};

export default ConsoleTest;
