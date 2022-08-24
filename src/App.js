import Directory from "./components/directory/directory.component";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import { Routes, Route } from "react-router-dom";

const App = () => {
  const categories = [
    {
      id: 1,
      title: "Category 1",
      imagePath: "/img/img1.jpg",
    },
    {
      id: 2,
      title: "Category 2",
      imagePath: "/img/img2.jpg",
    },
    {
      id: 3,
      title: "Category 3",
      imagePath: "/img/img3.jpg",
    },
    {
      id: 4,
      title: "Category 4",
      imagePath: "/img/img4.jpg",
    },
    {
      id: 5,
      title: "Category 5",
      imagePath: "/img/img5.jpg",
    },
    {
      id: 6,
      title: "Category 6",
      imagePath: "/img/img2.jpg",
    },
  ];

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Directory categories={categories} />
    </div>
  );
};

export default App;
