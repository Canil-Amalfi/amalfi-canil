import AboutOurDogs from "../../components/AboutOurDogs";
import NextLitters from "../../components/NextLitters";

export default function OurDogs() {
  return (
    <main>
      <AboutOurDogs />
      <img src="/images/division-paws.png" alt="animal paws" className="division-paws"/>
      <NextLitters />
    </main>
  );
}
