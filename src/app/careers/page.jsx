import Banner from "@/components/home/Banner";
import WhyWorkWithUs from "@/components/careers/WhyWorkWithUs";
import CTASection from "@/components/common/CTA";
import FAQs from "@/components/common/FAQs";
import Testimonials from "@/components/common/Testimonials";
import { hrFAQs } from "@/data/faqs";
const Careers = () => {
  return (
    <>
      <Banner
        badge={"Create Your Impact"}
        leading_text={"Join Us in Building the Future of"}
        supporting_text={"Work with Innovation"}
        description={"Accelerate delivery, and drive measurable results."}
        btn_text={"Get Started Now"}
      />
      <WhyWorkWithUs />
      <CTASection
        leading_title={"Everything Need"}
        supporting_title={"Know Before You Start"}
        description={
          "Streamline your work and grow your business with our all-in-one platform."
        }
      />
      <FAQs
        FAQs={hrFAQs}
        badge={"Your FAQ Hub"}
        title={"Explore Our HR Service FAQs"}
      />
      <Testimonials />
    </>
  );
};

export default Careers;
