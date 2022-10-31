import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Team from "./pages/Team";
import Menu from "./pages/Menu";
import Contact from "./pages/Contact";
import Nav from "./components/static/Nav";
import Footer from "./components/static/Footer";
import Admin from "./admin/Admin";
import ProtectedRoutes from "./admin/ProtectedRoutes";
import Login from "./admin/Login";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          {/* <Route element={<ProtectedRoutes />}>
            <Route path="/admin" element={<Admin />} />
          </Route> */}
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/ekip" element={<Team />} />
          <Route path="/iletisim" element={<Contact />} />
          {/* <Route path="/login" element={<Login />} /> */}
        </Routes>
      </div>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
