import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import TopNavBar from "./components/TopNavBar/TopNavBar";
import Hero from "./components/Hero/Hero";
import Featured from "./components/Featured/Featured";
import View from "./components/View/View";

function App() {
  return (
    <div className="app">
      <TopNavBar
        email="info@company.com"
        location="Sunny Isles Beach, FL 33160"
      />
      <NavBar title="villa" />
      <Hero />
      <Featured
        title="Featured"
        decs="Best Appartment"
        decs1="& Sea View"
      />
      <View />
    </div>
  );
}

export default App;
