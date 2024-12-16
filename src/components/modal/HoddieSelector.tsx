import React from 'react'

function HoddieSelector() {
  return (
    <div className="flex flex-col md:flex-row gap-8 p-6 font-sans">
    {/* Lado Izquierdo: Imagen */}
    <div className="flex-1 text-center">
      <img
        src="https://via.placeholder.com/400x500"
        alt="Suéter"
        className="w-full max-w-md mx-auto mb-4"
      />
      <div className="flex justify-center gap-2">
        <img
          src="https://via.placeholder.com/80x100"
          alt="Miniatura 1"
          className="w-20 h-24 cursor-pointer border border-gray-300"
        />
        <img
          src="https://via.placeholder.com/80x100"
          alt="Miniatura 2"
          className="w-20 h-24 cursor-pointer border border-gray-300"
        />
        <img
          src="https://via.placeholder.com/80x100"
          alt="Miniatura 3"
          className="w-20 h-24 cursor-pointer border border-gray-300"
        />
      </div>
    </div>

    {/* Lado Derecho: Detalles */}
    <div className="flex-1 flex flex-col gap-6">
      <h1 className="text-2xl font-bold">Suéter Con Cremallera</h1>
      <p className="text-gray-500">Cremallera Rib</p>
      <p className="text-xl font-semibold">$ 160,000.00 COP</p>

      {/* Tallas */}
      <div>
        <p className="font-medium mb-2">TALLAS</p>
        <div className="flex gap-4">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="size"
              value="S"
              onChange={(e) => setSize(e.target.value)}
              className="w-4 h-4"
            />
            S
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="size"
              value="L"
              onChange={(e) => setSize(e.target.value)}
              className="w-4 h-4"
            />
            L
          </label>
        </div>
      </div>

      {/* Comentarios */}
      <div>
        <p className="font-medium mb-2">Comentarios</p>
        <textarea
          placeholder="Opcional"
          value={comments}
          onChange={(e) => setComments(e.target.value)}
          className="w-full h-24 border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
        ></textarea>
      </div>

      {/* Cantidad */}
      <div className="flex items-center gap-4">
        <button
          onClick={() => setQuantity(quantity - 1)}
          disabled={quantity <= 1}
          className="w-8 h-8 bg-gray-200 text-gray-700 font-semibold rounded-full hover:bg-gray-300 disabled:opacity-50"
        >
          -
        </button>
        <span className="text-lg font-medium">{quantity}</span>
        <button
          onClick={() => setQuantity(quantity + 1)}
          className="w-8 h-8 bg-gray-200 text-gray-700 font-semibold rounded-full hover:bg-gray-300"
        >
          +
        </button>
      </div>

      {/* Botón Agregar */}
      <button
        onClick={handleAddToCart}
        className="w-full bg-gray-800 text-white py-2 rounded-md font-semibold hover:bg-gray-700 transition"
      >
        Agregar
      </button>
    </div>
  </div>
  )
}

export default HoddieSelector