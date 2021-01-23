import "../../../../css/about-us/new-director/new-director.scss";
import { Button, Grid } from "@material-ui/core";
import smiths from "../../../../img/portraits/smith-fam.jpg";

export default function NewDirector(props) {
  return (
    <Grid
      container
      spacing={1}
      wrap={"wrap-reverse"}
      className={"new-director-root"}
    >
      <Grid item md={6}>
        <img src={smiths} alt={"Luke Smith and family"} id={"smith-fam"} />
      </Grid>
      <Grid item md={6}>
        <div className={"director-content"}>
          <h2>
            <span>We</span> would like to welcome our new ambulance director:
          </h2>
          <h2 className={"director-title"}>LUKE SMITH</h2>
          {/* <p>
            A new ambulance director has been assigned for the Weiser Ambulance
            District. Luke Smith grew up in Ontario, Oregon where he was
            homeschooled and very active in sports. He graduated from TVCC,
            worked in construction for over 10 years, and completed his
            EMT-Basic. He took a full-time position with a local ambulance
            service. Back in 2008, Smith earned a mathematics degree at BSU and
            performed as a student teacher at Weiser High School. After that, he
            advanced in EMS to EMT-Intermediate. In 2013, Smith said that he
            received his Paramedic and was also working as a Training Officer
            until this past fall.{" "}
          </p> */}
          <p>
            “I’d like to introduce myself as your new Ambulance Director. My
            name is Luke Smith, my wife Brynna is a Weiser native. We’ve been
            married for 17 years and we have five children. Both of our families
            reside in or around Weiser, and we are grateful to be able to live
            in a community of so many wonderful people,” shared Smith. “I’m
            honored to have the opportunity to serve the Weiser Ambulance
            District as Director. I’m coming into this position with nearly 17
            years of EMS field work and training, and my desire is to serve our
            community through collaborative efforts founded on honest and
            transparent work ethic. You have some amazing EMT’s and Paramedics
            here and I want to ensure that they are fully equipped to meet the
            needs of people in this area.”
          </p>
          {/* <p>
            {" "}
            Luke Smith assured that he would be making his contact information
            available to the public soon so that anyone with questions,
            comments, or concerns can feel free to reach out. “I want the public
            to feel connected to and involved in our ambulance district. I
            appreciate your support and look forward to serving you with our
            local EMS system,” said Smith.
          </p> */}
          <Button
            variant={"text"}
            component={"a"}
            href={
              "https://livinginthenews.com/new-ambulance-director-recently-hired-for-weiser-ambulance-district/"
            }
          >
            FULL INTERVIEW HERE
          </Button>
        </div>
      </Grid>
    </Grid>
  );
}
