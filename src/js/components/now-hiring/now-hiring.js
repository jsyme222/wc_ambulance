import { Button } from "@material-ui/core";
import "../../../css/now-hiring/now-hiring.scss";
import Logo from "../logo-components/logo";

export default function NowHiring(props) {
  return (
    <div
        className={"now-hiring-root"}
    >
      <h2>WE'RE HIRING!</h2>
      <Logo logoStyle={"icon"} />
      <Button variant={"outlined"}>VIEW POSITIONS</Button>
    </div>
  );
}
