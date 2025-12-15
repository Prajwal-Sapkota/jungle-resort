import BookingForm from "../components/BookingForm";
import Hero from "../components/Hero";
import JungleCamp from "../components/JungleCamp"
import Navbar from "../components/Navbar";
import Special from "../components/Special";
import Story from "../components/Story";


export default function Home() {
  return (
    <>
      <div className="overflow-x-hidden">
        <Navbar />
        <Hero />
        <BookingForm />
        <Story />
        <JungleCamp/>
        <Special/>
        
        
        
      </div>

    </>
  );
}
