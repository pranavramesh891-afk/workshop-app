import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import WorkshopDetails from "../components/WorkshopDetails";
import LearningOutcomes from "../components/LearningOutcomes";
import FAQ from "../components/faq";
import RegistrationForm from "../components/RegistrationForm";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <WorkshopDetails />
      <LearningOutcomes />
      <FAQ />
      <RegistrationForm />
    </>
  );
}