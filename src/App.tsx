import Articles from "./components/Articles/Articles";
import Banners from "./components/Banners/Banners";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="font-main">
      <Header />

      <main>
        <Banners />
        <Articles />
      </main>

      <Footer />
    </div>
  );
}

export default App;
