import Button from "@mui/material/Button";
// import { Ripple } from "@mui/material";
import React from "react";
// import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import Africa from "../../../../assets/Africa.jpg";
// import logo from "../../../../assets/logo_color.png";
// import dsi from "../../../../assets/logo.jpg";

function Home() {
  const bull = (
    <Box component="span" sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}>
      •
    </Box>
  );

  return (
    <>
      <section style={{ overflow: "hidden" }}>
        {/* <div> top part <div/> */}
        <Grid container m={2} spacing={2}>
          <Grid item xs={6}>
            <section>
              <Typography variant="h1" component="h2">
                STI Portal
              </Typography>
              <Typography mt={2} variant="h2" color="text">
                Science, Technology and Innovation Portal
              </Typography>
              <Typography
                style={{ fontFamily: ['"Montserrat"', "Open Sans"].join(",") }}
                mt={2}
                variant="body1"
                color="text"
              >
                Welcome to the International Science, Technology and Innovation (STI) portal –
                breakthrough research information at your fingertips.
              </Typography>
              <Stack spacing={2} mt={3} direction="row">
                <Button variant="contained" color="white">
                  Learn More
                </Button>
                <Button>Register</Button>
              </Stack>
            </section>
          </Grid>
          <Grid item xs={4}>
            <img
              src={Africa}
              alt="Researcher"
              className="md:ml-auto block "
              style={{
                clipPath: "polygon(8% 0, 100% 0%, 100% 100%, 0 100%)",
                height: "84vh",
              }}
            />
          </Grid>
        </Grid>
        {/* <div> top part <div/> */}
      </section>
      {/* <section className="sponsors">
        <div className="surface-ground px-3 py-6 md:px-6 lg:px-8">
          <Typography
            m={2}
            mt={4}
            style={{ textAlign: "center" }}
            direction="row"
            variant="h1"
            component="h2"
          >
            Our sponsors
          </Typography>
          <Grid m={4} style={{ textAlign: "center" }}>
            <div style={{ textAlign: "center" }}>
              <img
                src={dsi}
                alt="National Research Foundation"
                style={{ height: "70px", marginTop: "15px" }}
              />
              <img
                src={logo}
                alt="Department of Science &amp; Innovation"
                style={{ height: "90px" }}
              />
            </div>
            <Link to="/sponsors" className="mr-3 link-button">
              <Button>Learn more</Button>
            </Link>
          </Grid>
        </div>
      </section> */}
      <Typography
        m={2}
        mt={4}
        style={{ textAlign: "center" }}
        direction="row"
        variant="h1"
        component="h2"
      >
        Testimonials
      </Typography>
      <Grid container m={2} direction="row">
        <Grid m={1} item xs>
          <Card sx={{ maxWidth: 345 }}>
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Word of the Day
              </Typography>
              <Typography variant="h5" component="div">
                be{bull}nev{bull}o{bull}lent
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                adjective
              </Typography>
              <Typography variant="body2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
                <br />
                hello
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>{" "}
        </Grid>
        <Grid m={1} item xs>
          <Card sx={{ maxWidth: 345 }}>
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Word of the Day
              </Typography>
              <Typography variant="h5" component="div">
                be{bull}nev{bull}o{bull}lent
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                adjective
              </Typography>
              <Typography variant="body2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
                <br />
                hello
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>{" "}
        </Grid>
        <Grid m={1} item xs>
          <Card sx={{ maxWidth: 345 }}>
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Word of the Day
              </Typography>
              <Typography variant="h5" component="div">
                be{bull}nev{bull}o{bull}lent
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                adjective
              </Typography>
              <Typography variant="body2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
                <br />
                hello
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>{" "}
        </Grid>
      </Grid>
      {/* <section className="features">
        <div className="surface-section px-3 py-6 md:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-3 font-bold text-4xl">
              <span className="text-900">One research solution , </span>
              <span className="text-purple-600 text-primary">many features</span>
            </div>
            <div className="text-700 text-sm mb-6">
              Discover why STI portal is preferred by a lot of researchers.
            </div>
            <div className="grid">
              <div className="col-12 md:col-4 mb-4 px-5">
                <span className="p-3 shadow-2 mb-3 inline-block" style={{ borderRadius: "10px" }}>
                  <i className="pi pi-desktop text-4xl text-blue-500 text-primary" />
                </span>
                <div className="text-900 mb-3 font-medium">Built for researchers</div>
                <span className="text-700 text-sm line-height-3">
                  Collating research information should not be burden, that is why our portal is
                  preferred by researchers.
                </span>
              </div>
              <div className="col-12 md:col-4 mb-4 px-5">
                <span className="p-3 shadow-2 mb-3 inline-block" style={{ borderRadius: "10px" }}>
                  <i className="pi pi-lock text-4xl text-blue-500 text-primary" />
                </span>
                <div className="text-900 mb-3 font-medium">Secure access.</div>
                <span className="text-700 text-sm line-height-3">
                  We care about the privacy of your information. With our world-class item-level
                  security, access to data is secured.
                </span>
              </div>
              <div className="col-12 md:col-4 mb-4 px-5">
                <span className="p-3 shadow-2 mb-3 inline-block" style={{ borderRadius: "10px" }}>
                  <i className="pi pi-check-circle text-4xl text-blue-500 text-primary" />
                </span>
                <div className="text-900 mb-3 font-medium">Easy to Use</div>
                <span className="text-700 text-sm line-height-3">
                  Our intuitive user-interface makes it a breeze to find information within the
                  portal.
                </span>
              </div>
              <div className="col-12 md:col-6 mb-6 px-5">
                <span className="p-3 shadow-2 mb-3 inline-block" style={{ borderRadius: "10px" }}>
                  <i className="pi pi-globe text-4xl text-blue-500 text-primary" />
                </span>
                <div className="text-900 mb-3 font-medium">Fast &amp; Globally Available</div>
                <span className="text-700 text-sm line-height-3">
                  Comprehensive research data, available quickly from any where around the globe.
                </span>
              </div>
              <div className="col-12 md:col-6 md:mb-6 mb-0 px-3">
                <span className="p-3 shadow-2 mb-3 inline-block" style={{ borderRadius: "10px" }}>
                  <i className="pi pi-shield text-4xl text-blue-500 text-primary" />
                </span>
                <div className="text-900 mb-3 font-medium">Data encrypted end-to-end</div>
                <span className="text-700 text-sm line-height-3">
                  Our data is encrypted from end-to-end for enhanced data protection.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <section>
        <div className="surface-ground px-3 py-6 md:px-6 lg:px-8">
          {/* <div>
            <div className="font-bold text-4xl text-900 mb-5 text-center">Testimonials</div>
            <div className="grid nogutter">
              <div className="col-12 lg:col-4 p-3">
                <div className="shadow-2 border-round h-full surface-card">
                  <div className="image-banner">
                    <img src="assets/images/research_banner.png" alt="Banner" />
                  </div>
                  <div className="p-4">
                    <div className="text-xl text-900 font-medium mb-3 line-height-3 ">
                      Fugitive flamingo spotted in Florida
                    </div>
                    <div className="text-sm line-height-3 mb-3 text-700">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua.
                    </div>
                    <div className="flex">
                      <div className="ml-2">
                        <div className="text-xs font-bold text-900 mb-1">Anna Lane</div>
                        <div className="text-xs flex align-items-center text-700">
                          <i className="pi pi-calendar mr-1 text-xs" />
                          <span>Apr 5, 2021</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 lg:col-4 p-3">
                <div className="shadow-2 border-round h-full surface-card">
                  <div className="image-banner">
                    <img src="assets/images/research_banner.png" alt="Banner" />
                  </div>
                  <div className="p-4 flex flex-column">
                    <div className="text-xl text-900 font-medium mb-3 line-height-3 ">
                      Journey to the Ends of the Earth
                    </div>
                    <div className="text-sm line-height-3 mb-3 text-700">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua.
                    </div>
                    <div className="flex">
                      <div className="ml-2">
                        <div className="text-xs font-bold text-900 mb-1">Arlene McCoy</div>
                        <div className="text-xs flex align-items-center text-700">
                          <i className="pi pi-calendar mr-1 text-xs" />
                          <span>Apr 6, 2021</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 lg:col-4 p-3">
                <div className="shadow-2 border-round h-full surface-card">
                  <div className="image-banner block w-full border-round-top">
                    <img src="assets/images/research_banner.png" alt="Banner" />
                  </div>
                  <div className="p-4">
                    <div className="text-xl text-900 font-medium mb-3 line-height-3 ">risk</div>
                    <div className="text-sm line-height-3 mb-3 text-700">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua.
                    </div>
                    <div className="flex">
                      <div className="ml-2">
                        <div className="text-xs font-bold text-900 mb-1">Diane Miles</div>
                        <div className="text-xs flex align-items-center text-700">
                          <i className="pi pi-calendar mr-1 text-xs" />
                          <span>Apr 9, 2021</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </section>
      {/* <section>
        <div className="surface-section px-4 py-6 md:px-6 lg:px-8">
          <div
            className="flex flex-wrap relative overflow-hidden"
            style={{
              borderRadius: "1rem",
              background:
                "radial-gradient(100% 1126.49% at 100% 0%, rgba(106, 200, 212, 0.4) 0%, rgba(33, 33, 33, 0) 100%), #212121",
            }}
          >
            <div className="px-6 py-6">
              <span className="uppercase text-cyan-500 font-bold text-primary">
                ACCESS THE BEST RESEARCH INFORMATION
              </span>
              <div className="text-white text-medium text-5xl mt-3 mb-5">
                Become a member of the STI Portal
              </div>
              <Link to="/register" className="link-button">
                <Button className="p-button-raised p-ripple appearance-none p-3 bg-primary-500 cursor-pointer transition-colors font-medium gray-900 border-none p-component transition-colors transition-duration-150">
                  Register Now
                </Button>
              </Link>
            </div>
            <img
              src="assets/images/research_banner.png"
              alt="moral"
              className="static lg:absolute block mx-auto"
              style={{ height: "320px", top: "-2rem", right: "-30rem" }}
            />
          </div>
        </div>
      </section> */}
    </>
  );
}

export default Home;
