import React, { useState } from "react";
import "./Coche.css";

function Coche(props) {
  const [estado, setEstado] = useState(false);

  //Velocidad coche
  const [velocidad, setVelocidad] = useState(0);

  //Podemos pintar un objeto
  var car = { marca: props.marca, modelo: props.modelo,velocidadMaxima: props.velocidadMaxima };

  const comprobarEstado = () => {
    if (estado == true) {
      return <h1 className="verde">El coche está encendido</h1>;
    } else {
      // setVelocidad(0); lo hace en bucle infinito porque
      //comprobar estado lo está haciendo todo el rato
      return <h1 className="rojo">El coche está apagado</h1>;
    }
  };

  const acelerarCoche = num => {
      //Si el coche está encendido...
    if (estado == true) {
        if((velocidad +num) > car.velocidadMaxima){
            setVelocidad(car.velocidadMaxima);
        }else{            
        //comprobamos su velocidad maxima
        setVelocidad(velocidad + num);
        }
    } else {
      alert("Coche parado");
    }
  };

  return (
    <div>
      <h1>Ejemplo coche</h1>
  <h2 className="rosa">{car.marca} {car.modelo}</h2>
      {comprobarEstado()}
      <button
        onClick={() => {
          setEstado(!estado);
          setVelocidad(0);
        }}
      >
        Cambiar estado
      </button>
      <h2 className="azul">{velocidad}</h2>
      <button
        onClick={() => {
          acelerarCoche(3);
        }}
      >
        Acelerar
      </button>
    </div>
  );
}

export default Coche;
