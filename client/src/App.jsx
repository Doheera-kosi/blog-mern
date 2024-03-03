import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Dashbord from "./pages/Dashbord";
import Projects from "./pages/Projects";
import SignOut from "./pages/SignOut";
import Header from "./components/Header";
import Footer from "./components/Footer";


export default function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashbord />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/sign-out" element={<SignOut />} />

      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

Route;
