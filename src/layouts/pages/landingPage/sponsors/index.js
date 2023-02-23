import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
// @mui material components
// @mui material components
import Link from "@mui/material/Link";

import logo from "../../../../assets/logo_color.png";
import dsi from "../../../../assets/logo.jpg";

export default function MediaCard() {
  return (
    <Grid
      style={{ display: "grid", gridTemplateColumns: "repeat(2 , 1fr)", justifyItems: "center" }}
      container
      m={2}
      direction="row"
    >
      <Grid item xs>
        <Card sx={{ maxWidth: "98%" }}>
          {/* <CardMedia sx={{ height: 90 }} image={logo} title="green iguana" /> */}
          <img style={{ width: "11rem", margin: "0.5rem" }} alt="" src={logo} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              National Research Foundation
            </Typography>
            <Typography style={{ minHeight: "6rem" }} variant="body2" color="text.secondary">
              The NRF is an independent statutory body. As a government mandated research and
              science development agency the NRF funds research, the development of high-end Human
              Capacity and critical research infrastructure to promote knowledge production across
              all disciplinary fields.
            </Typography>
          </CardContent>
          <CardActions>
            <Link size="small" href="https://www.nrf.ac.za/" target="_blank">
              <Button size="small">Learn More</Button>
            </Link>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs>
        <Card sx={{ maxWidth: "95%", marginRight: "1rem" }}>
          <img style={{ width: "11rem", margin: "0.5rem" }} alt="" src={dsi} />
          {/* <CardMedia sx={{ height: 90 }} image={dsi} title="green iguana" /> */}
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Department of Science and Technology
            </Typography>
            <Typography style={{ minHeight: "6rem" }} variant="body2" color="text.secondary">
              Department of Science and Technology is one of the departments in the Ministry of
              Higher Education and Innovation. The Department drives the Science, Technology and
              Innovation agenda of South Africa.
            </Typography>
          </CardContent>
          <CardActions>
            <Link size="small" href="https://www.dst.gov.za/" target="_blank">
              <Button size="small">Learn More</Button>
            </Link>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
}
