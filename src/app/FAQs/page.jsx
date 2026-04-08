import FAQs from "@/components/common/FAQs";
import ServiceForm from "@/components/common/ServiceForm";
import Banner from "@/components/home/Banner";
import { hrFAQs } from "@/data/faqs";

export const metadata = {
  title: "FAQs | Dignifyd Talent Connect",
  description:
    "Find answers to common questions about Dignifyd Talent Connect, our AI recruitment platform. Get clarity on how we can help you hire smarter and find jobs faster.",
};

const FAQPage = () => {
  return (
    <>
      <Banner
      banner_bg={null}
        badge={"Query Guide"}
        leading_text={"Frequently Asked"}
        supporting_text={"Questions"}
        description={"Get clarity instantly, and move forward with confidence."}
        btn_text={"Your Questions"}
      />
      <FAQs
        FAQs={hrFAQs}
        badge={"Answers At Your Fingertips"}
        title={"Your Questions, Our Answers"}
      />
      <ServiceForm/>
    </>
  );
};

export default FAQPage;
