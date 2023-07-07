import { Route, Routes } from "react-router-dom"

import NavbarComponent from "./components/NavbarComponent"
import FooterComponent from "./components/FooterComponent"
import HomePage from "./pages/HomePage"
import FaqPage from "./pages/FaqPage"
import KelasPage from "./pages/KelasPage"
import SyaratPage from "./pages/SyaratPage"
import TestimonialPage from "./pages/TestimonialPage"


function App() {
  return (
    <div>
      <NavbarComponent />

      <Routes>
        <Route path="/" Component={HomePage}/>
        <Route path="/faq" Component={FaqPage}/>
        <Route path="/syarat" Component={SyaratPage}/>
        <Route path="/kelas" Component={KelasPage}/>
        <Route path="/testi" Component={TestimonialPage}/>
      </Routes>
      
      <FooterComponent />
    </div>
  )
}

export default App
