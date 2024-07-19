import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import DropMenu from "../../components/DropMenu";
import { useState } from "react";

export default function DefaultPage() {
  const [opened, setOpened] = useState(false);

  const toogleOpened = () => {
    setOpened((prevState) => !prevState);
  };

  return (
    <>
      <Header toogleMenu={toogleOpened} />
      {opened && <DropMenu toogleMenu={toogleOpened} />}
      <Outlet />
      <Footer />
    </>
  );
}
