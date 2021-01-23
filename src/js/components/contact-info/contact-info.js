import { Grid } from "@material-ui/core";
import PageTitle from "../base-page/page-title/page-title";

export default function ContactInfo(props) {
    return (
        <div>
            <PageTitle title={"Contact information"} />
            <Grid container>
                <Grid item md={6}>
                    <h3>OUR LOCATION</h3>
                    <p>435 E Park St</p>
                    <p>Weiser, ID 83672</p>
                </Grid>
                <Grid item md={6}></Grid>
            </Grid>
        </div>
    )
}