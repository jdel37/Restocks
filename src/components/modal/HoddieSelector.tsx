
import { useLocation } from "react-router-dom";
import { useState } from "react";
function HoodieSelector() {
  const location = useLocation();
  const { price, name, imageSrc, hoverImageSrc, S, M, L, XL } = location.state || {};

  // Estados locales
  const [selectedSize, setSelectedSize] = useState("");
  const [comments, setComments] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [mainImage, setMainImage] = useState(imageSrc || "https://via.placeholder.com/400x500");
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });
  const [showZoom, setShowZoom] = useState(false);

  const handleMouseOrTouchMove = (e, rect) => {
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;

    const x = ((clientX - rect.left) / rect.width) * 100;
    const y = ((clientY - rect.top) / rect.height) * 100;

    // Restringir el movimiento al área de la imagen (0% - 100%)
    if (x >= 0 && x <= 100 && y >= 0 && y <= 100) {
      setZoomPosition({ x, y });
      setShowZoom(true);
    } else {
      setShowZoom(false);
    }
  };

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    handleMouseOrTouchMove(e, rect);
  };

  const handleTouchMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    handleMouseOrTouchMove(e, rect);
  };

  const handleMouseEnterOrTouchStart = () => {
    setShowZoom(true);
  };

  const handleMouseLeaveOrTouchEnd = () => {
    setShowZoom(false);
  };

  // Tallas disponibles con valores predeterminados si no están definidos
  const availableSizes = [
    { size: "S", available: S },
    { size: "M", available: M },
    { size: "L", available: L },
    { size: "XL", available: XL },
  ];

  return (
    <div className="flex flex-col md:flex-row gap-8 p-6 font-sans mt-20 mr-8">
      {/* Lado Izquierdo: Imagen principal y miniaturas */}
      <div className="flex-1 relative">
        <div
          className="flex justify-center relative overflow-hidden group"
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnterOrTouchStart}
          onMouseLeave={handleMouseLeaveOrTouchEnd}
          onTouchStart={handleMouseEnterOrTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleMouseLeaveOrTouchEnd}
        >
          <img
            src={mainImage}
            alt={name || "Producto"}
            className="w-full max-w-md object-cover rounded-md"
          />
          {/* Ventana de Zoom */}
          {showZoom && (
            <div
              className="absolute w-40 h-40 bg-no-repeat bg-cover border-2 border-gray-300 rounded-md pointer-events-none"
              style={{
                backgroundImage: `url(${mainImage})`,
                backgroundPosition: `${zoomPosition.x}% ${zoomPosition.y}%`,
                backgroundSize: "200%", // Nivel de zoom
                top: `${zoomPosition.y}%`,
                left: `${zoomPosition.x}%`,
                transform: "translate(-50%, -50%)",
              }}
            ></div>
          )}
        </div>
        <div className="flex justify-center gap-2 mt-4">
          {[imageSrc, hoverImageSrc, imageSrc].map((img, index) => (
            <img
              key={index}
              src={img || "https://via.placeholder.com/80x100"}
              alt={`Miniatura ${index}`}
              className="w-20 h-24 border border-gray-300 cursor-pointer hover:border-black"
              onClick={() => setMainImage(img || "https://via.placeholder.com/400x500")}
            />
          ))}
        </div>
      </div>

      {/* Lado Derecho: Detalles */}
      <div className="flex-1 flex flex-col gap-6">
        {/* Nombre del producto */}
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            {name || "Suéter Con Cremallera"}
          </h1>
          <p className="text-gray-500 mt-1">Cremallera Rib</p>
        </div>

        {/* Precio */}
        <p className="text-xl font-semibold text-gray-900">
          {price ? `$ ${price}.00 COP` : "$ 160,000.00 COP"}
        </p>

        {/* Tallas */}
        <div>
          <p className="font-medium text-gray-700 mb-2">
            TALLAS <span className="text-gray-400 ml-1">(Obligatorio)</span>
          </p>
          <div className="flex gap-4">
            {availableSizes.map(({ size, available }) =>
              available ? (
                <label
                  key={size}
                  className={`flex items-center gap-2 border rounded-md px-4 py-2 cursor-pointer ${
                    selectedSize === size
                      ? "border-gray-900 font-semibold"
                      : "border-gray-300"
                  }`}
                >
                  <input
                    type="radio"
                    name="size"
                    value={size}
                    checked={selectedSize === size}
                    onChange={() => setSelectedSize(size)}
                    className="hidden"
                  />
                  {size}
                </label>
              ) : null
            )}
          </div>
        </div>

        {/* Comentarios */}
        <div>
          <p className="font-medium text-gray-700 mb-2">Comentarios</p>
          <textarea
            placeholder="(Opcional)"
            value={comments}
            onChange={(e) => setComments(e.target.value)}
            className="w-full h-24 border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
          ></textarea>
        </div>

        {/* Cantidad */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setQuantity((prev) => Math.max(prev - 1, 1))}
            className="w-8 h-8 bg-gray-200 text-gray-700 font-semibold rounded-full hover:bg-gray-300"
          >
            -
          </button>
          <span className="text-lg font-medium">{quantity}</span>
          <button
            onClick={() => setQuantity((prev) => prev + 1)}
            className="w-8 h-8 bg-gray-200 text-gray-700 font-semibold rounded-full hover:bg-gray-300"
          >
            +
          </button>
        </div>

        {/* Botón Agregar */}
        <button
          className="w-full bg-gray-800 text-white py-2 rounded-md font-semibold hover:bg-gray-700 transition"
        >
          Agregar
        </button>

        {/* Precio Total */}
        <p className="text-right text-gray-700 font-medium">
          {`$ ${(price || 160000) * quantity}.00 COP`}
        </p>
      </div>
    </div>
  );
}

export default HoodieSelector;
