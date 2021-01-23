import BaseHeader from "../base-page/base-header/base-header";
import BasePage from "../base-page/base-page";
import amb from "../../../img/background/moving-ambulance.jpg";
import ServiceList from "../service-list/service-list";
import NowHiring from "../now-hiring/now-hiring";
import AboutUs from "../about-us/about-us";
import ContactInfo from "../contact-info/contact-info";

export default function HomePage(props) {
  return (
    <BasePage>
      <BaseHeader
        headerBackground={amb}
        content={"We scare because we care."}
      />
      <NowHiring />
      <ServiceList />
      <ContactInfo />
      <AboutUs />
    </BasePage>
  );
}
