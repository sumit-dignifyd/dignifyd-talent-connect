import Team from "../common/Team";
import { leadershipTeam } from "@/data/team";

const LeaderShip = () => {
  return (
    <>
      <Team
        badge={"Leadership Team"}
        title={"Leadership Team"}
        description={
          "Profiles of key leadership including global HR strategists, regional heads, and operations directors."
        }
        team={leadershipTeam}
      />
    </>
  );
};

export default LeaderShip;
