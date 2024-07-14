import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import DropMenu from "./components/DropMenu";
import { useState } from "react";
import Home from "./pages/Home";
import AboutOurDogs from "./pages/AboutOurDogs";

function App() {
  const [openedMenu, setOpenedMenu] = useState(false);

  const toogleMenu = () => {
    setOpenedMenu((prevState) => !prevState);
  };

  return (
    <BrowserRouter>
      <Header toogleMenu={toogleMenu} />
      {openedMenu && <DropMenu toogleMenu={toogleMenu} />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nossos-caes" element={<AboutOurDogs />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
