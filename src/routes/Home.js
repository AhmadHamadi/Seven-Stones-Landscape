import Navbar from "../components/Navbar";
import HomeHero from "../components/HomeHero";
import Destination from "../components/Destination";
import Footer from "../components/Footer";
import Trip from "../components/Trip";

function Home() {
  return (
    <>
      <Navbar />
      <HomeHero
        cName="hero"
        heroImg="https://monetlandscape.com/wp-content/uploads/2020/01/IMG_5295-2048x1413.jpg"
        title="Your Dream Backyard"
        text="Select from our high quality stones "
        btnClass="show"
        buttonText="Get Started"
        url="/"
      />
      <Destination />
      <Trip />
      <Footer />
    </>
  );
}

export default Home;
