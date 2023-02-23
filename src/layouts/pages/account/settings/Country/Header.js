/**
=========================================================
* Material Dashboard 2 PRO React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-pro-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// import { useState } from "react";
import Card from "@mui/material/Card";
// import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

// Material Dashboard 2 PRO React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

import Grid from "@mui/material/Grid";
// import Switch from "@mui/material/Switch";
import { VectorMap } from "@react-jvectormap/core";
import { worldMerc } from "@react-jvectormap/world";
// Material Dashboard 2 PRO React components
// import MDBox from "components/MDBox";
// import MDTypography from "components/MDTypography";
// import MDAvatar from "components/MDAvatar";

// Images
// import burceMars from "assets/Barcelona.png";

// Material Dashboard 2 PRO React examples
import SalesTable from "examples/Tables/SalesTable";
// Data
import salesTableData from "layouts/dashboards/analytics/components/SalesByCountry/data/salesTableData";

function Header() {
  // const [visible, setVisible] = useState(true);

  // const handleSetVisible = () => setVisible(!visible);

  return (
    <Card sx={{ width: "100%" }}>
      <MDBox display="flex">
        <MDBox
          display="flex"
          justifyContent="center"
          alignItems="center"
          width="4rem"
          height="4rem"
          variant="gradient"
          bgColor="success"
          color="white"
          shadow="md"
          borderRadius="xl"
          ml={3}
          mt={-2}
        >
          <Icon fontSize="medium" color="inherit">
            language
          </Icon>
        </MDBox>
        <MDTypography variant="h6" sx={{ mt: 2, mb: 1, ml: 2 }}>
          Country Outputs
        </MDTypography>
      </MDBox>
      <MDBox p={2}>
        <Grid container>
          <Grid item xs={12} md={7} lg={6}>
            <SalesTable rows={salesTableData} shadow={false} />
          </Grid>
          <Grid item xs={12} md={5} lg={6} sx={{ mt: { xs: 5, lg: 0 } }}>
            <VectorMap
              map={worldMerc}
              zoomOnScroll={false}
              zoomButtons={false}
              markersSelectable
              backgroundColor="transparent"
              selectedMarkers={[1, 3]}
              markers={[
                {
                  name: "South Africa",
                  latLng: [-28.4792625, 24.6727135],
                },
                {
                  name: "Tanzania",
                  latLng: [-6.3728253, 34.8924826],
                },
                {
                  name: "Uganda",
                  latLng: [0.347596, 32.58252],
                },
                {
                  name: "Egypt",
                  latLng: [30.033333, 31.233334],
                },
                // {
                //   name: "China",
                //   latLng: [22.320178999475512, 114.17161225541399],
                // },
              ]}
              regionStyle={{
                initial: {
                  fill: "#dee2e7",
                  "fill-opacity": 1,
                  stroke: "none",
                  "stroke-width": 0,
                  "stroke-opacity": 0,
                },
              }}
              markerStyle={{
                initial: {
                  fill: "#e91e63",
                  stroke: "#ffffff",
                  "stroke-width": 5,
                  "stroke-opacity": 0.5,
                  r: 7,
                },
                hover: {
                  fill: "E91E63",
                  stroke: "#ffffff",
                  "stroke-width": 5,
                  "stroke-opacity": 0.5,
                },
                selected: {
                  fill: "E91E63",
                  stroke: "#ffffff",
                  "stroke-width": 5,
                  "stroke-opacity": 0.5,
                },
              }}
              style={{
                marginTop: "-1.5rem",
              }}
              onRegionTipShow={() => false}
              onMarkerTipShow={() => false}
            />
          </Grid>
        </Grid>
      </MDBox>
    </Card>
  );
}

export default Header;
