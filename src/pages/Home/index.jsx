import BlogCall from "../../components/BlogCall";
import GalleryCall from "../../components/GalleryCall";
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
      <GalleryCall />
    </main>
  );
}
