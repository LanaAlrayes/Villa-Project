import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import TopNavBar from "./components/TopNavBar/TopNavBar";
import Hero from "./components/Hero/Hero";
function App() {
  return (
    <div className="app">
      <TopNavBar
        email="info@company.com"
        location="Sunny Isles Beach, FL 33160"
      />
      <NavBar />
      <Hero />
    </div>
  );
}

export default App;
