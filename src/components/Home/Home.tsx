import { useState, useEffect } from "react";


import BgImage from "../../assets/bgbig.jpeg";

import Hoodies from "./../Hoodies/Hoodies";
import Typewriter from "typewriter-effect";

function Home() {
  const [showAnimation, setShowAnimation] = useState(false);
 
  useEffect(() => {
    // Mostrar la animación después de 300ms
    const timer = setTimeout(() => {
      setShowAnimation(true);
    }, 300);

    return () => clearTimeout(timer); // Limpiar el temporizador si el componente se desmonta
  }, []);

  

  return (
    <div className="flex flex-col justify-start w-full">
      {/* Encabezado */}
      <header>
       
      </header>

      {/* Contenido Principal */}
      <main>
        {/* Banner con imagen y animación */}
        <div
          className="relative w-full h-[50vh] md:h-[60vh] bg-white text-[#db4a2b] flex items-center overflow-hidden"
          style={{
            backgroundImage: `url(${BgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* Máscara */}
          <div className="absolute inset-0 bg-black/50 z-10"></div>

          {/* Contenido centrado */}
          <div className="flex flex-col items-center w-full px-4 relative z-20">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white drop-shadow-md text-center">
              {showAnimation ? (
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString("Find Your Vibe") // Texto animado
                      .callFunction(() => {
                        // Eliminar cursor
                        
                      })
                      .start();
                  }}
                  options={{
                    cursor: "", // Elimina el cursor
                  }}
                />
              ) : null}
            </h1>
            <p className="text-md sm:text-lg md:text-xl text-white mt-4 text-center">
              Encuentra los mejores productos
            </p>
          </div>
        </div>

        {/* Componente de productos */}
        <Hoodies />

     
     
      </main>

      {/* Pie de página */}
   
    </div>
  );
}

export default Home;
