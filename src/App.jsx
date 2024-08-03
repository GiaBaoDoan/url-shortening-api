import "./App.css";
import Header from "./components/Header.jsx";
import Shortener from "./components/Shortener.jsx";
import Showcase from "./components/Showcase.jsx";
import Avanced from "./components/Avanced.jsx";
import Boost from "./components/Boost.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <main className="app">
      <Header />
      <Showcase />
      <Shortener />
      <Avanced />
      <Boost />
      <Footer />
    </main>
  );
}

export default App;
