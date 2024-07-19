import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import OurDogs from "./pages/OurDogs";
import Blog from "./pages/Blog";
import DefaultPage from "./pages/DefaultPage";
import BlogPosts from "./pages/BlogPosts";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultPage />}>
          <Route index element={<Home />} />
          <Route path="nossos-caes" element={<OurDogs />} />
          <Route path="blog" element={<Blog />} />
        </Route>

        <Route path="/blog/blogPosts/:id" element={<BlogPosts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
