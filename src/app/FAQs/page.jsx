import FAQs from "@/components/common/FAQs";
import ServiceForm from "@/components/common/ServiceForm";
import Banner from "@/components/home/Banner";
import { hrFAQs } from "@/data/faqs";

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
