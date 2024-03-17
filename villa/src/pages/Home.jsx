import Hero from "../components/Hero/Hero";
import Featured from "../components/Featured/Featured";
import VideoView from "../components/VideoView/VideoView";
import BestDeal from "../components/BestDeal/BestDeal";
import Property from "../components/Property/Property";

function Home() {
  return (
    <>
      {" "}
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
      <Property
        title="| PROPERTIES"
        decs="We Provide The Best"
        decs1="Property You Like"
      />
    </>
  );
}
export default Home;
