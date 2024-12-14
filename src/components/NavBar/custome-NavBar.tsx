
import { ShoppingBag } from "lucide-react";
import { Search } from "lucide-react";
import { UserRound } from "lucide-react";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "../ui/menubar";

function CustomeNavBar() {
  return (
    <div className="hidden md:flex bg-black w-full text-white items-center justify-between fixed top-0 left-0 px-4 py-2 z-50">
      {/* Logo */}
      <a href="/">
      <div className="flex items-center flex-grow justify-center">
       
        <h1 className="text-[#db4a2b] text-[16px] sm:text-[20px] md:text-[28px] lg:text-[36px] font-black whitespace-nowrap">
          RESTOCKS
        </h1>
       
       
      </div>
      </a>

      {/* Menubar centrado */}
      <div className="flex-1 flex justify-center items-center">
        <Menubar className="flex gap-x-6 items-center">
          {/* Menú 1 */}
          <MenubarMenu>
            <MenubarTrigger className="text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] relative group text-center">
              File
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#db4a2b] transition-all duration-300 group-hover:w-full"></span>
            </MenubarTrigger>
            <MenubarContent className="mt-2 p-2 bg-black text-white rounded-md shadow-md w-auto">
              <MenubarItem>New Tab</MenubarItem>
              <MenubarItem>New Window</MenubarItem>
              <MenubarItem>Share</MenubarItem>
              <MenubarItem>Print</MenubarItem>
            </MenubarContent>
          </MenubarMenu>

          {/* Menú 2 */}
          <MenubarMenu>
            <MenubarTrigger className="text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] relative group text-center">
              Colecciones
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#db4a2b] transition-all duration-300 group-hover:w-full"></span>
            </MenubarTrigger>
            <MenubarContent className="mt-2 p-2 bg-black text-white rounded-md shadow-md w-auto">
              <MenubarItem>Hombres</MenubarItem>
              <MenubarItem>Mujeres</MenubarItem>
              <MenubarItem>Accesorios</MenubarItem>
              <MenubarItem>Ofertas</MenubarItem>
            </MenubarContent>
          </MenubarMenu>

          {/* Menú 3 */}
          <MenubarMenu>
            <MenubarTrigger className="text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] relative group text-center">
              Categoría
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#db4a2b] transition-all duration-300 group-hover:w-full"></span>
            </MenubarTrigger>
            <MenubarContent className="mt-2 p-2 bg-black text-white rounded-md shadow-md w-auto">
              <MenubarItem>Hombres</MenubarItem>
              <MenubarItem>Mujeres</MenubarItem>
              <MenubarItem>Accesorios</MenubarItem>
              <MenubarItem>Ofertas</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </div>

      {/* Botones e iconos */}
      <div className="flex items-center justify-end gap-2 sm:gap-4">
        <UserRound />
        <Search className="w-[16px] sm:w-[20px] md:w-[24px] lg:w-[28px] h-[16px] sm:h-[20px] md:h-[24px] lg:h-[28px]" />
        <ShoppingBag className="w-[16px] sm:w-[20px] md:w-[24px] lg:w-[28px] h-[16px] sm:h-[20px] md:h-[24px] lg:h-[28px]" />
      </div>
    </div>
  );
}

export default CustomeNavBar;
