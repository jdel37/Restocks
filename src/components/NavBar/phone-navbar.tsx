import { useState } from "react";
import { Menu, X, UserRound, ShoppingBag, Search } from "lucide-react";

function PhoneNavbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isPortfolioDropdownOpen, setIsPortfolioDropdownOpen] = useState(false);
  const [isContactDropdownOpen, setIsContactDropdownOpen] = useState(false);

  const togglePortfolioDropdown = () => {
    setIsPortfolioDropdownOpen((prev) => !prev);
  };

  const toggleContactDropdown = () => {
    setIsContactDropdownOpen((prev) => !prev);
  };

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
      <div
        className={`fixed top-0 left-0 h-full bg-black bg-opacity-95 z-50 transition-transform duration-300 transform ${isNavOpen ? "translate-x-0 w-3/4" : "-translate-x-full w-3/4"}`}
      >
        {/* Cerrar menú */}
        <X
          className="absolute top-8 right-8 w-[24px] h-[24px] cursor-pointer text-white"
          onClick={() => setIsNavOpen(false)}
        />

        {/* Links del menú */}
        <ul className="flex flex-col items-center gap-6 mt-20">
          <li className="border-b border-gray-400 uppercase">
            <a href="/about" className="text-white">About</a>
          </li>

          {/* Dropdown para Portfolio */}
          <li className="border-b border-gray-400 uppercase">
            <button
              onClick={togglePortfolioDropdown}
              className="flex justify-between items-center w-full px-4 py-2 text-white uppercase"
            >
              Portfolio
              <svg
                className={`h-5 w-5 transition-transform duration-300 ${isPortfolioDropdownOpen ? "rotate-180" : "rotate-0"}`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            {isPortfolioDropdownOpen && (
              <div className="w-full text-center text-white">
                <ul className="flex flex-col gap-2 mt-2">
                  <li>
                    <a href="/portfolio/projects" className="block px-4 py-2 hover:bg-neutral-600">Projects</a>
                  </li>
                  <li>
                    <a href="/portfolio/gallery" className="block px-4 py-2 hover:bg-neutral-600">Gallery</a>
                  </li>
                </ul>
              </div>
            )}
          </li>

          {/* Dropdown para Contact */}
          <li className="border-b border-gray-400 uppercase">
            <button
              onClick={toggleContactDropdown}
              className="flex justify-between items-center w-full px-4 py-2 text-white uppercase"
            >
              Contact
              <svg
                className={`h-5 w-5 transition-transform duration-300 ${isContactDropdownOpen ? "rotate-180" : "rotate-0"}`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            {isContactDropdownOpen && (
              <div className="w-full text-center text-white">
                <ul className="flex flex-col gap-2 mt-2">
                  <li>
                    <a href="/contact/email" className="block px-4 py-2 hover:bg-neutral-600">Email</a>
                  </li>
                  <li>
                    <a href="/contact/phone" className="block px-4 py-2 hover:bg-neutral-600">Phone</a>
                  </li>
                </ul>
              </div>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default PhoneNavbar;
