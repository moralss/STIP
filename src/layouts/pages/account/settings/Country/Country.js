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

// @mui material components
import Grid from "@mui/material/Grid";
// Material Dashboard 2 PRO React components
import MDBox from "components/MDBox";

// Settings page components
import BaseLayout from "layouts/pages/account/components/BaseLayout";
import Sidenav from "layouts/pages/account/settings/Country/Sidenav";
import Header from "layouts/pages/account/settings/Country/Header";
import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";
import ReportsLineChart from "examples/Charts/LineCharts/ReportsLineChart";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";

import reportsBarChartData from "layouts/dashboards/analytics/data/reportsBarChartData";
import reportsLineChartData from "layouts/dashboards/analytics/data/reportsLineChartData";
// import BasicInfo from "layouts/pages/account/settings/components/BasicInfo";
// import ChangePassword from "layouts/pages/account/settings/components/ChangePassword";
// import Authentication from "layouts/pages/account/settings/components/Authentication";
// import Accounts from "layouts/pages/account/settings/components/Accounts";
// import Notifications from "layouts/pages/account/settings/components/Notifications";
// import Sessions from "layouts/pages/account/settings/components/Sessions";
// import DeleteAccount from "layouts/pages/account/settings/components/DeleteAccount";
import BookingCard from "examples/Cards/BookingCard";
import booking1 from "assets/images/products/product-1-min.jpg";
import booking2 from "assets/images/products/product-2-min.jpg";
import booking3 from "assets/images/products/product-3-min.jpg";

function Country() {
  const { sales, tasks } = reportsLineChartData;

  return (
    <BaseLayout>
      <MDBox mt={4}>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={3}>
            <Sidenav />
          </Grid>
          <Grid item xs={12} lg={9}>
            <Header />
            <MDBox mt={6}>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6} lg={4}>
                  <MDBox mb={3}>
                    <ReportsBarChart
                      color="info"
                      title="Number of Publications"
                      description="Publications per year"
                      date="just updated"
                      chart={reportsBarChartData}
                    />
                  </MDBox>
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                  <MDBox mb={3}>
                    <ReportsLineChart
                      color="success"
                      title="Patents"
                      description="Patents per year"
                      date="updated 4 min ago"
                      chart={sales}
                    />
                  </MDBox>
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                  <MDBox mb={3}>
                    <ReportsLineChart
                      color="dark"
                      title="Collaborations"
                      description="Collaborations per year"
                      date="just updated"
                      chart={tasks}
                    />
                  </MDBox>
                </Grid>
              </Grid>
            </MDBox>
            <MDBox mt={1.5}>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6} lg={3}>
                  <MDBox mb={1.5}>
                    <ComplexStatisticsCard
                      color="dark"
                      icon="weekend"
                      title="Global Competitiveness index"
                      count={129}
                      percentage={{
                        color: "success",
                        amount: "+2",
                        label: "from last year",
                      }}
                    />
                  </MDBox>
                </Grid>
                <Grid item xs={12} md={6} lg={3}>
                  <MDBox mb={1.5}>
                    <ComplexStatisticsCard
                      icon="leaderboard"
                      title="Microeconomic Environment"
                      count="64"
                      percentage={{
                        color: "success",
                        amount: "+3",
                        label: "from last year",
                      }}
                    />
                  </MDBox>
                </Grid>
                <Grid item xs={12} md={6} lg={3}>
                  <MDBox mb={1.5}>
                    <ComplexStatisticsCard
                      color="success"
                      icon="store"
                      title="Goods Market Efficiency"
                      count="53"
                      percentage={{
                        color: "success",
                        amount: "+1",
                        label: "from last year",
                      }}
                    />
                  </MDBox>
                </Grid>
                <Grid item xs={12} md={6} lg={3}>
                  <MDBox mb={1.5}>
                    <ComplexStatisticsCard
                      color="primary"
                      icon="person_add"
                      title="Financial Market Development"
                      count="117"
                      percentage={{
                        color: "success",
                        amount: "-2",
                        label: "from last year",
                      }}
                    />
                  </MDBox>
                </Grid>
              </Grid>
            </MDBox>
            <MDBox mt={2}>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6} lg={4}>
                  <MDBox mt={3}>
                    <BookingCard
                      image={booking1}
                      title="Cozy 5 Stars Apartment"
                      description='The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Barcelona.'
                      price="$899/night"
                      location="Barcelona, Spain"
                      // action={actionButtons}
                    />
                  </MDBox>
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                  <MDBox mt={3}>
                    <BookingCard
                      image={booking2}
                      title="Office Studio"
                      description='The place is close to Metro Station and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the night life in London, UK.'
                      price="$1.119/night"
                      location="London, UK"
                      // action={actionButtons}
                    />
                  </MDBox>
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                  <MDBox mt={3}>
                    <BookingCard
                      image={booking3}
                      title="Beautiful Castle"
                      description='The place is close to Metro Station and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Milan.'
                      price="$459/night"
                      location="Milan, Italy"
                      // action={actionButtons}
                    />
                  </MDBox>
                </Grid>
              </Grid>
            </MDBox>
          </Grid>
        </Grid>
      </MDBox>
    </BaseLayout>
  );
}

export default Country;