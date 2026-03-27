import Banner from "@/components/home/Banner";
import TermsConditions from "@/components/terms-conditons/TermsConditions";

export const TermsCondition = () => {
  return (
    <>
      <Banner
        banner_bg={null}
        badge={"Terms & Conditions"}
        leading_text={"Terms & Conditions"}
        description={
          "By accessing or using our website, you agree to be bound by these terms and conditions. If you do not agree with any part of these terms, please do not use our website."
        }
      />
      <TermsConditions />
    </>
  );
};

export default TermsCondition;
