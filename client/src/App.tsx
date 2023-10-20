import Footer from "./components/footer";
import Navbar from "./components/navbar";
import { ThemeProvider } from "./components/theme-provider";
import { Toaster } from "react-hot-toast";
import ArticlePage from "./pages/article-page";
import LandingPage from "./pages/landing-page";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Toaster />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/article/:articleId" element={<ArticlePage />} />
          {/* Falta añadir la ruta para la página de error */}
        </Routes>
        <Footer/>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
