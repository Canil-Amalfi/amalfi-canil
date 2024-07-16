import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import DropMenu from "./components/DropMenu";
import { useState } from "react";
import Home from "./pages/Home";
import OurDogs from "./pages/OurDogs";
import Blog from "./pages/Blog";

function App() {
  const [opened, setOpened] = useState(false);

  const toogleOpened = () => {
    setOpened((prevState) => !prevState);
  };

  return (
    <BrowserRouter>
      <Header toogleMenu={toogleOpened} />
      {opened && <DropMenu toogleMenu={toogleOpened} />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nossos-caes" element={<OurDogs />}/>
        <Route path="/blog" element={<Blog />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
