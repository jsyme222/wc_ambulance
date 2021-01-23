import { Button, Drawer, IconButton } from "@material-ui/core";
import { MenuSharp } from "@material-ui/icons";
import { useAtom } from "jotai";
import { Link } from "react-router-dom";
import "../../../../../css/page-frame/main-menu/main-menu.scss";
import { menuOpen } from "../../../../jotai/Atoms";
import Logo from "../../../logo-components/logo";

export default function MainMenu({ children }) {
  const [isOpen, setIsOpen] = useAtom(menuOpen);

  const menuItems = {
    left: [
      ["home", "/"],
      ["services", "/services"],
    ],
    right: [
      ["about us", "/about"],
      ["contact", "/contact"],
    ],
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const MenuSide = ({ menuItems, toggle }) => {
    return (
      <div className={"content-side"}>
        {Array.isArray(menuItems) &&
          menuItems.map((item, i) => (
            <Button
              component={Link}
              to={item[1]}
              key={i}
              onClick={toggle ? () => toggleMenu() : null}
            >
              {item[0].toUpperCase()}
            </Button>
          ))}
      </div>
    );
  };

  return (
    <>
      <div className={"main-menu-root"}>
        <MenuSide menuItems={menuItems.left} />
          <Logo logoStyle={"no-bg"} />
        <MenuSide menuItems={menuItems.right} />
        <IconButton className={"menu-button"} onClick={toggleMenu}>
          <MenuSharp />
        </IconButton>
      </div>
      <Drawer anchor={"right"} open={isOpen} onClose={toggleMenu}>
        <div className={"main-menu-root drawer"}>
          <div className={"drawer-header"} onClick={toggleMenu}>
            <Logo logoStyle={"light"} />
          </div>
          <MenuSide menuItems={menuItems.left} toggle />
          <MenuSide menuItems={menuItems.right} toggle />
        </div>
      </Drawer>
    </>
  );
}
