import { useState } from "react";
import { Menu, X, UserRound, ShoppingBag, Search } from "lucide-react";

function PhoneNavbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="md:hidden flex bg-black w-full text-white items-center justify-between fixed top-0 left-0 px-4 py-2 z-50 relative">
      {/* Menú hamburguesa a la izquierda */}
      <div className="flex items-center justify-start z-10">
        <Menu
          className="w-[24px] h-[24px] cursor-pointer"
          onClick={() => setIsNavOpen((prev) => !prev)}
        />
      </div>

      {/* Título centrado */}
    
        <a href="/" className="text-[#db4a2b] text-[20px] font-black whitespace-nowrap items-center justify-center">
          <h1 className="text-[#db4a2b] text-[20px] font-black whitespace-nowrap items-center justify-center">
            RESTOCKS
          </h1>
        </a>
     

      {/* Íconos a la derecha */}
      <div className="flex items-center justify-end gap-4 z-10">
        <UserRound className="w-[20px] h-[20px] cursor-pointer" />
        <Search className="w-[20px] h-[20px] cursor-pointer" />
        <ShoppingBag className="w-[20px] h-[20px] cursor-pointer" />
      </div>

      {/* Menú móvil */}
      <nav>
        <section className="MOBILE-MENU flex lg:hidden">
          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            {/* Cerrar menú */}
            <div
              className="absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)}
            >
              <X className="w-[24px] h-[24px] text-white cursor-pointer" />
            </div>

            {/* Links del menú */}
            <ul className="flex flex-col items-center justify-center min-h-[250px]">
              <li className="border-b border-gray-400 my-4 uppercase">
                <a href="/about">About</a>
              </li>
              <li className="border-b border-gray-400 my-4 uppercase">
                <a href="/portfolio">Portfolio</a>
              </li>
              <li className="border-b border-gray-400 my-4 uppercase">
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>
        </section>
      </nav>

      {/* Estilos del menú */}
      <style>{`
        .hideMenuNav {
          display: none;
        }
        .showMenuNav {
          display: block;
          position: fixed;
          width: 100%;
          height: 100vh;
          top: 0;
          left: 0;
          background: black;
          z-index: 10;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          opacity: 90%;
        }
      `}</style>
    </div>
  );
}

export default PhoneNavbar;
