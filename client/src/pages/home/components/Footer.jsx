import { Box, Typography, useMediaQuery } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import "./footer.scss";
import LanguageIcon from "@mui/icons-material/Language";

const Footer = () => {
  const matches = useMediaQuery('(min-width:600px)');
  return (
    <Box width={"77%"} mx="auto" py={5}>
      <Box display="flex" flexDirection={matches ? "row" :"column"} justifyContent="space-between" alignItems="start">
        <Box display="flex" flexDirection="column" mb={2} textAlign="left">
          <Link className="footerLink" to="/">
            FAQ
          </Link>
          <Link className="footerLink" to="/">
            Investor Relations
          </Link>
          <Link className="footerLink" to="/">
            Privacy
          </Link>
          <Link className="footerLink" to="/">
            Speed Test
          </Link>
        </Box>
        <Box display="flex" flexDirection="column" mb={2} textAlign="left">
          <Link className="footerLink" to="/">
            Help Centre
          </Link>
          <Link className="footerLink" to="/">
            Jobs
          </Link>
          <Link className="footerLink" to="/">
            Cookie Preferences
          </Link>
          <Link className="footerLink" to="/">
            Legal Notices
          </Link>
        </Box>
        <Box display="flex" flexDirection="column" mb={2} textAlign="left">
          <Link className="footerLink" to="/">
            Account
          </Link>
          <Link className="footerLink" to="/">
            Ways to Watch
          </Link>
          <Link className="footerLink" to="/">
            Corporate Information
          </Link>
          <Link className="footerLink" to="/">
            Only on netflix
          </Link>
        </Box>
        <Box display="flex" flexDirection="column" textAlign="left">
          <Link className="footerLink" to="/">
            Media Centre
          </Link>
          <Link className="footerLink" to="/">
            Terms of Use
          </Link>
          <Link className="footerLink" to="/">
            Contact Us
          </Link>
          <Link className="footerLink" to="/">
          Cookie Preferences
          </Link>
        </Box>
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        border="1px solid #fff"
        width="100px"
        alignItems="center"
        padding=".5rem .9rem"
        mt={2}
        textAlign="center"
      >
        <LanguageIcon sx={{fontSize:24}} />
        <Typography>English</Typography>
      </Box>

      <Typography
        style={{marginTop: "40px", fontSize: 20 }}
      >
        Netflix India
      </Typography>
    </Box>
  );
};

export default Footer;
