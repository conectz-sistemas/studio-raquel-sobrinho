import "./index.css";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Hero from "./components/Hero.jsx";
import Home from "./pages/Home.jsx";
import ScrollProgress from "./components/Progress/ScrollProgress.jsx";


export default function App() {
  return (
    <div className="min-h-screen bg-bg text-text font-body">
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        <Home />
      </main>
      <Footer />
    </div>
  );
}
