import BlogCall from "../../components/BlogCall";
import Gallery from "../../components/Gallery";
import NextLitters from "../../components/NextLitters";
import Presentation from "../../components/Presentation";
import WaitingList from "../../components/WaitingList";

export default function Home() {
  return (
    <main>
      <Presentation />
      <NextLitters />
      <WaitingList />
      <BlogCall />
      <Gallery />
    </main>
  );
}
