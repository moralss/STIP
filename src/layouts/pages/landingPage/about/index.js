// import Button from "@mui/material/Button";
import React from "react";
import Typography from "@mui/material/Typography";
import cover from "../../../../assets/pexels-rfstudio-3825527.jpg";

function About() {
  return (
    <div className="p-0">
      <div className=" surface-border border-round surface-card" style={{ minHeight: "20rem" }}>
        <div>
          <div
            style={{
              height: "200px",
              background: `url(${cover}) no-repeat`,
              backgroundSize: "top",
            }}
          />
          <div style={{ padding: "5rem" }}>
            <div
              className="flex flex-column lg:flex-row lg:align-items-center lg:justify-content-between relative"
              style={{ marginTop: "-2rem", top: "-70px", marginBottom: "-70px" }}
            >
              <div>
                <div
                  style={{ width: "140px", height: "140px", borderRadius: "10px" }}
                  className="mb-3 surface-card shadow-2 flex align-items-center justify-content-center"
                >
                  <img src={cover} alt="Microscope" width="100" height="100" />
                </div>
                <Typography m={2} variant="h1" component="h2">
                  STI Portal
                </Typography>
                <Typography
                  style={{ fontFamily: ['"Montserrat"', "Open Sans"].join(",") }}
                  m={2}
                  variant="body1"
                  component="h2"
                >
                  The International Science, Technology and Innovation Portal is a South African
                  initiative of the Department of Science and Innovation (DSI) and the National
                  Research Foundation (NRF). It brings together statistics on science, technology
                  and innovation from the African continent and it compares those with other
                  countries in the world.
                </Typography>
                <Typography style={{ fontFamily: ['"Montserrat"', "Open Sans"].join(",") }} m={2}>
                  Through this portal researchers and policy makers alike will find information for
                  relevant and well-informed decisions.
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
