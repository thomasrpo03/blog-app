import Footer from "./components/footer";
import Navbar from "./components/navbar";
import { ThemeProvider } from "./components/theme-provider";
import LandingPage from "./pages/landing-page";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          {/* Falta añadir la ruta para la página del articulo por ID */}
          {/* Falta añadir la ruta para la página de error */}
        </Routes>
        <Footer/>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
