import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";
import Cart from "./routes/Cart";

const Shop = () => {
  return <h2>SHOP PAGE</h2>;
};

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="/shop" element={<Shop />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
