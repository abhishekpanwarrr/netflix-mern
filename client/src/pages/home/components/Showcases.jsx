import React from "react";
import { Box, Typography } from "@material-ui/core";


import { data } from "../data/data";
import useMediaQuery from "@mui/material/useMediaQuery";
const Showcases = () => {
    const matches = useMediaQuery('(min-width:600px)');
  return (
    <>
      {data.map((item) => {
        return (
          <Box
            height={!matches ? "auto" : "60vh"}
            maxWidth="100%"
            px="10%"
            sx={{
              borderBottom: "6px solid rgba(255,0,0,0.2) !important",
              display: "flex",
              flexDirection: matches ? "row" : "column",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box
              flex={1}
              display="flex"
              justifyContent="center"
              alignItems="center"
              height="auto"
              order={`${item.direction === "left" ? 1 : 2}`}
            >
              <Box
                textAlign={matches ? "left" : "center"}
                mt={!matches && "20px"}
                marginBottom={!matches && item.direction === "right" && "30px"}
              >
                <Typography
                  style={{
                    fontSize: matches ? "3rem" : "1.5rem",
                    fontWeight: 900,
                    marginBottom: "5px",
                    width: "80%",
                  }}
                >
                  {item.title}
                </Typography>
                <Typography
                  style={{
                    fontSize: matches ? "1.5rem" : "1rem",
                    width: "90%",
                  }}
                >
                  {item.subTitle}
                </Typography>
              </Box>
            </Box>
            <Box
              flex={1}
              display="flex"
              justifyContent="center"
              alignItems="center"
              height="auto"
              order={`${item.direction === "left" ? 2 : 1}`}
            >
              {item.video && (
                <video
                  autoPlay={true}
                  muted={true}
                  loop={true}
                  src={item.video}
                  width={"60%"}
                  height={!matches ? 330 :550}
                />
              )}
              {item.image && <img src={item.image} alt="photos" />}
            </Box>
          </Box>
        );
      })}
    </>
  );
};

export default Showcases;
