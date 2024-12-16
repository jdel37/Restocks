import { useState } from "react";

function Footer() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const toggleDropdown2 = () => {
    setIsOpen2(!isOpen2);
  };
  const toggleDropdown3 = () => {
    setIsOpen3(!isOpen3);
  };

  return (
    <footer
      className={`bg-neutral-100 text-center text-neutral-600 dark:bg-neutral-600 dark:text-neutral-200 lg:text-left transition-all duration-300 ${isOpen ? "h-auto" : "h-[initial]"}`}
    >
      {/* Social Media Section */}
      <div className="flex items-center justify-center border-b-2 border-neutral-200 p-6 dark:border-neutral-500 lg:justify-between">
        <div className="mr-12 hidden lg:block">
          <span>Get connected with us on social networks:</span>
        </div>
        <div className="flex justify-center">
          <a href="#" className="mr-6 text-neutral-600 dark:text-neutral-200">
            {/* Facebook */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
            </svg>
          </a>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="mx-6 py-10 text-center md:text-left">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Column 1 */}
          <div>
            <h6 className="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
              {/* Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="mr-3 h-4 w-4"
              >
                <path d="M12.378 1.602a.75.75 0 00-.756 0L3 6.632l9 5.25 9-5.25-8.622-5.03zM21.75 7.93l-9 5.25v9l8.628-5.032a.75.75 0 00.372-.648V7.93zM11.25 22.18v-9l-9-5.25v8.57a.75.75 0 00.372.648l8.628 5.033z" />
              </svg>
              TW Elements
            </h6>
            <p>
              Use rows and columns to organize your footer content. Lorem ipsum
              dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>

          {/* Dropdown Column */}
          <div className="relative inline-block text-left">
            {/* Button */}
            <button
              onClick={toggleDropdown}
              className="inline-flex justify-center w-full shadow-sm px-4 py-2 text-sm font-medium text-white"
              type="button"
            >
              Options
              <svg
                className={`-mr-1 ml-2 h-5 w-5 transition-transform duration-300 ${
                  isOpen ? "rotate-180" : "rotate-0"
                }`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
              <div className="flex justify-center w-full mt-2">
                <div className="w-56 text-center  text-white ">
                  <div className="py-1" role="menu" aria-orientation="vertical">
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm hover:bg-neutral-600"
                      role="menuitem"
                    >
                      Profile
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm hover:bg-neutral-600"
                      role="menuitem"
                    >
                      Settings
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm hover:bg-neutral-600"
                      role="menuitem"
                    >
                      Logout
                    </a>
                  </div>
                </div>
              </div>
            )}
            
          </div>
          <div className="relative inline-block text-left">
            {/* Button */}
            <button
              onClick={toggleDropdown2}
              className="inline-flex justify-center w-full shadow-sm px-4 py-2 text-sm font-medium text-white"
              type="button"
            >
              Options
              <svg
                className={`-mr-1 ml-2 h-5 w-5 transition-transform duration-300 ${
                  isOpen2 ? "rotate-180" : "rotate-0"
                }`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            {/* Dropdown Menu */}
            {isOpen2 && (
              <div className=" flex justify-center w-full mt-2">
                <div className="w-56 text-center  text-white ">
                  <div className="py-1" role="menu" aria-orientation="vertical">
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm hover:bg-neutral-600"
                      role="menuitem"
                    >
                      Profile
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm hover:bg-neutral-600"
                      role="menuitem"
                    >
                      Settings
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm hover:bg-neutral-600"
                      role="menuitem"
                    >
                      Logout
                    </a>
                  </div>
                </div>
              </div>
            )}
            
          </div>
          <div className="relative inline-block text-left">
            {/* Button */}
            <button
              onClick={toggleDropdown3}
              className="inline-flex justify-center w-full shadow-sm px-4 py-2 text-sm font-medium text-white"
              type="button"
            >
              Options
              <svg
                className={`-mr-1 ml-2 h-5 w-5 transition-transform duration-300 ${
                  isOpen3 ? "rotate-180" : "rotate-0"
                }`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            {/* Dropdown Menu */}
            {isOpen3&& (
              <div className=" flex justify-center w-full mt-2">
                <div className="w-56 text-center  text-white ">
                  <div className="py-1" role="menu" aria-orientation="vertical">
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm hover:bg-neutral-600"
                      role="menuitem"
                    >
                      Profile
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm hover:bg-neutral-600"
                      role="menuitem"
                    >
                      Settings
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm hover:bg-neutral-600"
                      role="menuitem"
                    >
                      Logout
                    </a>
                  </div>
                </div>
              </div>
            )}
            
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="bg-neutral-200 p-6 text-center dark:bg-neutral-700">
        <span>© 2023 Copyright:</span>
        <a
          className="font-semibold text-neutral-600 dark:text-neutral-400"
          href="https://tw-elements.com/"
        >
          TW Elements
        </a>
      </div>
    </footer>
  );
}

export default Footer;
