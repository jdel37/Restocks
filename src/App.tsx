import { Route, Routes } from "react-router-dom";
import Home from './components/Home/Home'
import About from "./pages/about";
import CustomeNavBar from "./components/NavBar/custome-NavBar";
import PhoneNavbar from "./components/NavBar/phone-navbar";
import './App.css'
import Footer from "./components/Footer/Footer";
import HoddieSelector from "./components/modal/HoddieSelector";
import { path } from "path";

function App() {
  

  return (
    <div className="w-screen h-screen mx-auto py-4">
    <CustomeNavBar />
    <PhoneNavbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="/hoodie/:id" element={<HoddieSelector/>}/>
    </Routes>
    <Footer />
  </div>
  )
}

export default App
