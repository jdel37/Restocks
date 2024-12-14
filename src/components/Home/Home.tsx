import React from 'react';
import CustomeNavBar from '../NavBar/custome-NavBar.tsx';
import Footer from '../Footer/Footer.tsx';
import BgImage from '../../assets/bgbig.jpeg';


import PhoneNavbar from "../NavBar/phone-navbar.tsx";
import Hoodies from "./../Hoodies/Hoodies";

function Home() {
  return (
    <div className="flex flex-col justify-start w-full">
      <header>
        <nav><CustomeNavBar />
        <PhoneNavbar/>
        </nav>
      
      </header>
     

     <main>
      <div
        className="relative w-full h-[50vh] md:h-[60vh] bg-white text-[#db4a2b] flex items-center overflow-hidden"
        style={{
          backgroundImage: `url(${BgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Mask */}
        <div className="absolute inset-0 bg-black/50 z-10"></div>

        {/* Centered Content */}
        <div className="flex flex-col items-center w-full px-4 relative z-20">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white drop-shadow-md text-center">
            Find Your Vibe
          </h1>
          <p className="text-md sm:text-lg md:text-xl text-white mt-4 text-center">
            Encuentra los mejores productos
          </p>

        </div>
      </div>
<Hoodies/>
  
    
      </main>
      <Footer/>
    </div>
 
  );
}

export default Home;
