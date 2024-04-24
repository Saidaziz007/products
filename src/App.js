import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Like from "./pages/like/Like";
import Single from "./pages/single-page/Single";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <ToastContainer />
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
