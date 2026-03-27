import FAQs from "@/components/common/FAQs";
import FAQForm from "@/components/FAQs/FAQForm";
import Banner from "@/components/home/Banner";
import { hrFAQs } from "@/data/faqs";

export async function generateMetadata() {
  return {
    title: "FAQ - My Website",
    description: "Get answers to frequently asked questions.",
  };
}

const FAQPage = () => {
  return (
    <>
      <Banner
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
      <FAQForm />
    </>
  );
};

export default FAQPage;
