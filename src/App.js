import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Like from "./pages/like/Like";
import Single from "./pages/single-page/Single";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/like" element={<Like />} />
        <Route path="/product/:id" element={<Single />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
