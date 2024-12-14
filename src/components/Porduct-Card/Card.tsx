import  { useState } from "react";

interface CardProps {
  imageSrc: string;
  hoverImageSrc: string;
  nameProduct: string;
  priceProduct: number | string; // Puede ser un número o una cadena si lo deseas más flexible
}

const Card: React.FC<CardProps> = ({
  imageSrc,
  hoverImageSrc,
  nameProduct,
  priceProduct,
}) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <div
      className="w-full bg-white overflow-hidden"
      onMouseEnter={() => setIsHovered(true)} // Detecta el hover
      onMouseLeave={() => setIsHovered(false)} // Detecta cuando el mouse sale
    >
      {/* Contenedor de imágenes con posición relativa */}
      <div className="relative w-full aspect-[3/4] overflow-hidden">
        {/* Imagen principal (no hover) */}
        <img
          src={imageSrc}
          alt={nameProduct}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            isHovered ? "opacity-0" : "opacity-100"
          }`}
        />
        {/* Imagen secundaria (hover) */}
        <img
          src={hoverImageSrc}
          alt={`${nameProduct} Hover`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>

      {/* Información del producto */}
      <div className="p-4 text-center">
        <h2 className="text-xl font-semibold text-gray-800">{nameProduct}</h2>
        <h3 className="text-lg text-gray-600 mt-2">{priceProduct} COP</h3>
      </div>
    </div>
  );
};

export default Card;
