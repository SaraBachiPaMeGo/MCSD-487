import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";  
import {Button} from "react-bootstrap"

function Bici(props) {
  var bici = {
    modelo: "keka",
    velocidadMax: 20,
    aceleracion: 5,
    imagen:
      "https://static.carrefour.es/hd_510x_/crs/cdn_static/catalog/hd/826770_00_1.jpg"
  };

  const [velocidad, setVelocidad] = useState(0);
  const [estado, setEstado] = useState(false);

  const comprobarEstado = () => {
    if (estado == false) {
      return <h2 className="rojo">La bici está parada</h2>;
    } else {
      return <h2 className="verde">La bici está en marcha</h2>;
    }
  };

  const acelerar = () => {
    if (estado == false) {
      alert("Bici desmontada, no puedes acelerar");
    } else {
      if (velocidad + bici.aceleracion > bici.velocidadMax) {
        setVelocidad(bici.velocidadMax);
      } else {
        setVelocidad(velocidad + bici.aceleracion);
      }
    }
  };
  const frenar = () => {
    if (estado == false) {
      alert("Ya estás parado");
    } else {
      if ((velocidad <= 0)) {
        setVelocidad(0);
      } else {
        setVelocidad(velocidad - 2);
      }
    }
  };

  return (
    <div>
      {comprobarEstado()}
      <h1>{velocidad}</h1>
      
  <Button variant="outline-warning"onClick={() => {
          acelerar();
        }}>Acelerar</Button>
      
  <Button variant="outline-info" onClick={() => {
          setEstado(!estado);
          setVelocidad(0);
        }}>Cambiar estado</Button>
     
      <Button variant="outline-danger" onClick={() => {
          frenar();
        }}>Frenar</Button>
        <img src={bici.imagen}/>
    </div>
  );
}

export default Bici;
