import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box, Button, Input, useMediaQuery } from "@material-ui/core";
import { accordion } from "../data/data";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import FormControl from "@mui/joy/FormControl";
import { Stack } from "@mui/material";

export default function Questions() {
  const [expanded, setExpanded] = useState(false);
  const [email, setEmail] = useState("");

  const matches = useMediaQuery("(min-width:600px)");
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(email);
    setEmail("");
  };
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box width={"77%"} mx="auto" py={5}>
      {accordion.map((item, index) => (
        <Accordion
          key={index}
          expanded={expanded === index}
          onChange={handleChange(index)}
          sx={{ bgcolor: "#4e4e4e", color: "#fff" }}
        >
          <AccordionSummary
            sx={{ height: "80px" }}
            expandIcon={
              <ExpandMoreIcon sx={{ color: "#fff", fontSize: "32px" }} />
            }
          >
            <Typography variant="h5">{item.title}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{item.description}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}

      <Box mt={3}>
        <Stack
          display="flex"
          width={"60%"}
          mx="auto"
          mt={4}
          justifyContent="center"
        >
          <Typography
            variant={!matches ? "h6" : "h5"}
            width="100%"
            mb={2}
            textAlign="center"
          >
            Ready to watch? Enter your email to create or restart your
            membership.
          </Typography>
          <form onSubmit={handleSubmit} style={{ width: "100%" }}>
            <FormControl
              sx={{
                display: "flex",
                width: "100%",
                flexDirection: matches ? "row" : "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <input
                placeholder="Enter email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{
                  width: "100%",
                  height: "42px",
                  outline: "none",
                  border: "1px solid #eee",
                  backgroundColor: "transparent",
                  paddingLeft: "15px",
                  fontSize: "16px",
                  color: "#eee",
                }}
              />
              <Button
                type="submit"
                variant="contained"
                style={{
                  width: !matches ? "150px" : "195px",
                  backgroundColor: "#fb3e3e",
                  color: "#fff",
                  borderRadius: 0,
                  border: "1px solid #fb3e3e",
                  alignSelf: !matches && "flex-end",
                  fontSize: !matches ? "13px" : "15px",
                }}
              >
                Get Started{" "}
                <ChevronRightIcon
                  sx={{ fontSize: !matches ? "16px" : "32px" }}
                />
              </Button>
            </FormControl>
          </form>
        </Stack>
      </Box>
    </Box>
  );
}
