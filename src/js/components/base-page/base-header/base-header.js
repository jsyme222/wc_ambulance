import "../../../../css/base-page/base-header.scss";
// import Logo from "../../logo-components/logo";

export default function BaseHeader({ headerBackground, content }) {
  return (
    <div className={"base-header-root"}>
      <div
        className={"header-img-container"}
        style={{ backgroundImage: `url(${headerBackground})` }}
      >
        <div className={"header-content"}>
          <h2 style={{ fontWeight: 200 }}>
            {content && content.toUpperCase()}
          </h2>
          {/* <div className={"logoStamp"}>
            <Logo logoStyle={"icon"} />
            <div className={"stamp-content"}>
              <h2>Washington Co.</h2>
              <h2>Paramedics</h2>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
