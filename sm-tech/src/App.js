// import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import WorldVisualizer from "./components/geospatial/world-visualizer";
import TravelCatalogue from "./components/destinations/catalogue";
import ProductsIcon from "./components/products/products-icon";

function App() {
  return (
    <div className="App">
      <header className="app-header">
        <Header />
      </header>
      <section className="app-section">
        <TravelCatalogue />
        <WorldVisualizer />
      </section>
      <section className="product-section">
        <ProductsIcon />
      </section>
      <footer className="app-footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
