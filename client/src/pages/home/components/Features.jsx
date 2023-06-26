import { Box, Button, Typography, useMediaQuery } from "@material-ui/core";
import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import FormControl from "@mui/joy/FormControl";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Input from "@mui/joy/Input";

const Features = () => {
  const [email, setEmail] = useState("");
  const matches = useMediaQuery('(min-width:600px)');
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(email);
    setEmail("");
  };
  return (
    <Box
      width="100%"
      height="76vh"
      position="relative"
      sx={{
        borderBottom: "6px solid rgba(255,0,0,0.2) !important",
      }}
    >
      <img
        width={"100%"}
        height={"100%"}
        style={{ objectFit: "cover" }}
        src="https://assets.nflxext.com/ffe/siteui/vlv3/530fc327-2ddb-4038-a3f0-2da2d9ccede1/9c547c8a-e707-4bdb-bdbc-843f134dd2a6/IN-en-20230619-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        alt="bg"
      />
      <Box
        position="absolute"
        sx={{ inset: 0 }}
        display="flex"
        alignItems="center"
        flexDirection="column"
        justifyContent="center"
        bgcolor="rgba(0,0,0,0.6)"
        color="#fff"
        top="50%"
        left="45%"
      >
        <Typography
          variant={matches ? "h3" : "h5"}
          style={{ marginBottom: "10px" }}
        >
          Unlimited movies, TV shows and more
        </Typography>
        <Typography
          variant={matches ? "h4" : "h6"}
          style={{ marginBottom: "8px" }}
        >
          Watch anywhere. Cancel anytime.
        </Typography>
        <Typography
          style={{
            fontSize: matches ? "20px" : "14px",
            width: !matches && "65%",
          }}
        >
          Ready to watch? Enter your email to create or restart your membership.
        </Typography>
        <Stack
          display="flex"
          flexDirection="row"
          width={matches ? "37%" : "80%"}
          mt={4}
          justifyContent="center"
        >
          <form onSubmit={handleSubmit} style={{ width: "100%" }}>
            <FormControl
              sx={{
                display: "flex",
                width: "100%",
                flexDirection: matches ? "row" : "column",
              }}
            >
              <Input
                fullWidth
                placeholder="Enter email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                sx={{
                  height: "60px",
                  borderRadius: 0,
                  outline: "none",
                }}
              />
              <Button
                type="submit"
                variant="contained"
                style={{
                  width: "195px",
                  backgroundColor: "#fb3e3e",
                  color: "#fff",
                  borderRadius: 0,
                  alignSelf: !matches && "flex-end",
                }}
              >
                Get Started <ChevronRightIcon sx={{ fontSize: "35px" }} />
              </Button>
            </FormControl>
          </form>
        </Stack>
      </Box>
    </Box>
  );
};

export default Features;
