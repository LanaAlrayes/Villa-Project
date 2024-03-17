import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import TopNavBar from "./components/TopNavBar/TopNavBar";
import Hero from "./components/Hero/Hero";
import Featured from "./components/Featured/Featured";
import VideoView from "./components/VideoView/VideoView";
import BestDeal from "./components/BestDeal/BestDeal";
import Property from "./components/Property/Property";

function App() {
  return (
    <div className="app">
      <TopNavBar
        email="info@company.com"
        location="Sunny Isles Beach, FL 33160"
      />
      <NavBar title="villa" />
      <Hero />
      <Featured title="| Featured" decs="Best Appartment" decs1="& Sea View" />
      <VideoView
        title="| VIDEO VIEW"
        decs="Get Closer View &"
        decs1="Different Feeling"
      />
      <BestDeal
        title="| BEST DEAL"
        decs="Find Your Best Deal"
        decs1="Right Now!"
      />
      <Property />
    </div>
  );
}

export default App;
