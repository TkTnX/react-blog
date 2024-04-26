import Articles from "./components/Articles/Articles";
import Banners from "./components/Banners/Banners";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="font-main">
      <Header />

      <main>
        <Banners />
        <Articles />
      </main>
    </div>
  );
}

export default App;
