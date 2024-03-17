import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import TopNavBar from "./components/TopNavBar/TopNavBar";
import Home from "./pages/Home";
import Properties from "./pages/Properties";
import PropertyDetails from "./pages/PropertyDetails";
import ContactUS from "./pages/ContactUS";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <TopNavBar
        email="info@company.com"
        location="Sunny Isles Beach, FL 33160"
      />
      <NavBar title="villa" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/properties" element={<Properties title="Properties" />} />
        <Route path="/propertyDetails" element={<PropertyDetails />} />
        <Route path="/contactUS" element={<ContactUS />} />
      </Routes>
    </div>
  );
}

export default App;
