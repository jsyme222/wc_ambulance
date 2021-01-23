import logo from "../../../../img/wc_ambulance_logo/logo-no-BG.svg";
import "../../../../css/page-frame/header.scss";
import Logo from "../../logo-components/logo";
import MainMenu from "./main-menu/main-menu";

export default function PageHeader(props) {
  return (
    <div className={"page-header-root"}>
      <MainMenu/>
    </div>
  );
}
