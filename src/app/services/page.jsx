import Banner from "@/components/home/Banner";
import ServicesSection from "@/components/services/Services";
import Newsletter from "@/components/contact/NewsLetter";
import Collaboration from "@/components/home/Collaboration";
import ServicesGrid from "@/components/services/ServicesGrid";

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
