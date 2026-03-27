import DisclaimerContent from "@/components/disclaimer/DisclaimerContent";
import Banner from "@/components/home/Banner";
import { AlertTriangle } from "lucide-react";

const Disclaimer = () => {
  return (
    <>
      <Banner
        banner_bg={null}
        badge={<AlertTriangle className="h-6 w-6 text-purple-400" />}
        leading_text={"Disclaimer"}
        description={
          "This disclaimer outlines the terms and conditions governing the use of our platform."
        }
      />
      <DisclaimerContent />
    </>
  );
};

export default Disclaimer;
