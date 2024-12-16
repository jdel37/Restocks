import { useState } from "react";
import { Menu, X, UserRound, ShoppingBag, Search } from "lucide-react";

function PhoneNavbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="md:hidden grid grid-cols-3 bg-black w-full text-white items-center fixed top-0 left-0 px-4 py-2 z-50">
      {/* Menú y Búsqueda a la izquierda */}
      <div className="flex items-center gap-4">
        <Menu
          className="w-[24px] h-[24px] cursor-pointer"
          onClick={() => setIsNavOpen((prev) => !prev)}
        />
        <Search className="w-[20px] h-[20px] cursor-pointer" />
      </div>

      {/* Título centrado */}
      <div className="flex items-center justify-center">
        <a
          href="/"
          className="text-[#db4a2b] text-[20px] font-black tracking-wide"
        >
          RESTOCKS
        </a>
      </div>

      {/* Íconos de Perfil y Carrito a la derecha */}
      <div className="flex items-center justify-end gap-6">
        <UserRound className="w-[20px] h-[20px] cursor-pointer" />
        <ShoppingBag className="w-[20px] h-[20px] cursor-pointer" />
      </div>

      {/* Menú móvil */}
      {isNavOpen && (
        <nav className="absolute top-0 left-0 w-full h-screen bg-black bg-opacity-95 flex flex-col items-center justify-center z-50">
          {/* Cerrar menú */}
          <X
            className="absolute top-8 right-8 w-[24px] h-[24px] cursor-pointer"
            onClick={() => setIsNavOpen(false)}
          />

          {/* Links del menú */}
          <ul className="flex flex-col items-center gap-6">
            <li className="border-b border-gray-400 uppercase">
              <a href="/about">About</a>
            </li>
            <li className="border-b border-gray-400 uppercase">
              <a href="/portfolio">Portfolio</a>
            </li>
            <li className="border-b border-gray-400 uppercase">
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
}

export default PhoneNavbar;
