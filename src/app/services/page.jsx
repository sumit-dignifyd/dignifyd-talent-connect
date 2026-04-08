import Banner from "@/components/home/Banner";
import ServicesSection from "@/components/services/Services";
import Newsletter from "@/components/contact/NewsLetter";
import Collaboration from "@/components/home/Collaboration";
import ServicesGrid from "@/components/services/ServicesGrid";

export const metadata = {
  title: "Services | Dignifyd Talent Connect",
  description:
    "Explore our comprehensive range of services designed to help you hire smarter and find jobs faster. From talent acquisition to workforce growth, we provide innovative solutions that drive measurable results for modern organizations.",
};

const Services = () => {
  return (
    <>
      <Banner
        badge={"Talent That Delivers"}
        leading_text={"Innovative Hiring Solutions for"}
        supporting_text={"Modern Organizations"}
        description={"Accelerate delivery, and drive measurable results."}
        btn_text={"Get Started Now"}
      />
      <ServicesSection />
      <ServicesGrid />
      <Collaboration />
      <Newsletter />
    </>
  );
};

export default Services;
