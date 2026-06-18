import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import WorkshopDetails from "../components/WorkshopDetails";
import LearningOutcomes from "../components/LearningOutcomes";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <WorkshopDetails />
      <LearningOutcomes />
    </>
  );
}