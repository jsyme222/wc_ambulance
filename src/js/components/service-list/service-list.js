import { Grid, Paper } from "@material-ui/core";
import "../../../css/service-list/service-list.scss";
import small from "../../../img/background/small-ambulance.jpg";
import back from "../../../img/background/ambulance-back.jpg";
import standby from '../../../img/background/standby.jpg';
import PageTitle from "../base-page/page-title/page-title";

export default function ServiceList(props) {
  const services = {
    "Ambulance Services": [
      `Aute incididunt sit quis id in cillum ex. 
          Voluptate duis velit amet reprehenderit aliqua 
          occaecat nisi et nisi sint reprehenderit et 
          velit. Aliqua nulla duis pariatur pariatur
          mollit et 
           consectetur culpa.`,
      small,
    ],
    "Medical Transports": [
      `Aliquip ullamco dolore culpa dolore minim dolor 
      cillum cupidatat. Nisi irure qui qui occaecat 
      tempor est sint. Officia eiusmod magna ex aute 
      elit ad sint enim ut eu aliqua ipsum.`,
      back,
    ],
    "Event Standby": [
      `Aliquip ullamco dolore culpa dolore minim dolor 
      cillum cupidatat. Nisi irure qui qui occaecat 
      tempor est sint. Officia eiusmod magna ex aute 
      elit ad sint enim ut eu aliqua ipsum.`,
      standby,
    ],
  };

  const ServiceItem = ({ title, description, img }) => (
    <Grid item xs={12} md={5}>
      <Paper className={"service-item-root"}>
        <Grid container spacing={2}>
          <Grid item md={12} lg={5}>
            <div>
              <h1>{title}</h1>
            </div>
            <hr />
            <div>{description}</div>
          </Grid>
          <Grid item sm={12} md={7} className={"item-image-container"}>
            {img && <img src={img} alt={title} />}
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );

  return (
    <div className={"service-list-root"}>
      <PageTitle title={"services"} />
      <Grid
        container
        alignItems={"center"}
        justify={"center"}
        spacing={3}
        className={"service-grid-container"}
      >
        {Object.entries(services).map((s, i) => (
          <ServiceItem
            key={i}
            title={s[0]}
            description={s[1][0]}
            img={s[1][1] && s[1][1]}
          />
        ))}
      </Grid>
    </div>
  );
}
