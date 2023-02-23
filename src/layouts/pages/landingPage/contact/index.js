import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
import Typography from "@mui/material/Typography";

function contact() {
  return (
    <div>
      <Grid container m={2} justifyContent="center" alignItems="center" direction="row">
        <Grid
          style={{ display: "grid", gridTemplateColumns: "2rem 14rem" }}
          xs
          item
          m={2}
          direction="row"
        >
          <Icon xs fontSize="medium">
            {" "}
            place{" "}
          </Icon>
          <div>
            <Typography variant="h4"> Address </Typography>
            <Typography style={{ height: "5rem" }} variant="body2">
              {" "}
              NRF Building, South Gate CSIR Complex Meiring Naude Street Brummeria, Pretoria South
              Africa{" "}
            </Typography>
          </div>{" "}
        </Grid>
        <Grid style={{ display: "grid", gridTemplateColumns: "2rem 14rem" }} centered xs item m={2}>
          <Icon fontSize="medium"> place </Icon>
          <div>
            <Typography variant="h4"> Postal Address </Typography>
            <Typography style={{ height: "5rem" }} variant="body2">
              P.O.Box 2600 Pretoria 0001 South Africa{" "}
            </Typography>
          </div>{" "}
        </Grid>
        <Grid style={{ display: "grid", gridTemplateColumns: "2rem 14rem" }} centered xs item m={2}>
          <Icon fontSize="medium"> phone </Icon>
          <div>
            <Typography variant="h4"> Telephone </Typography>
            <Typography style={{ height: "5rem" }} variant="body2">
              {" "}
              (012) 481-4000
            </Typography>
          </div>{" "}
        </Grid>
        <Grid style={{ display: "grid", gridTemplateColumns: "2rem 14rem" }} centered xs item m={2}>
          <Icon fontSize="medium"> email </Icon>
          <div>
            <Typography variant="h4"> Email </Typography>
            <Typography style={{ height: "5rem" }} variant="body2">
              info@nrf.org
            </Typography>
          </div>
        </Grid>
      </Grid>
      <Grid m={3}>
        <iframe
          className="w-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3593.4437364589826!2d28.273770215274258!3d-25.755902952152915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e9560683b710a47%3A0x6bb15e5709ae5aeb!2sNational%20Research%20Foundation!5e0!3m2!1sen!2sza!4v1669009695247!5m2!1sen!2sza"
          width="100%"
          height="600"
          style={{ border: "0" }}
          title="map"
        />
      </Grid>
    </div>
  );
}

export default contact;
