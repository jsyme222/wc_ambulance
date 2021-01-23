import "../../../css/about-us/about-us.scss";
import PageTitle from "../base-page/page-title/page-title";
import NewDirector from "./new-director/new-director";
import WhoWeAre from "./who-we-are/who-we-are";

export default function AboutUs(props) {
  return (
    <div className={"about-us-root"}>
      <PageTitle title={"About Us"} />
      <WhoWeAre />
      <div className={"about-updates"}>
        <PageTitle title={"updates"} />
        <NewDirector />
      </div>
    </div>
  );
}
