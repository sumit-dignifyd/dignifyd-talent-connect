import { ourBrandTeam } from "@/data/team";
import Team from "../common/Team";

const OurPeopleOurBrand = () => {
  return (
    <>
      <Team
        badge={"Diversity. Integrity. Innovation."}
        title={"Our People Are Our Brand"}
        description={
          "Our strength lies in our people - culturally diverse, multi-lingual, and driven by empathy."
        }
        team={ourBrandTeam}
      />
    </>
  );
};

export default OurPeopleOurBrand;
