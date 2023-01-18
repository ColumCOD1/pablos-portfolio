import React from 'react'
import "../styles/Footer.css";
import LinkedInIcon from"@material-ui/icons/LinkedIn";
import IconButton  from "@material-ui/core/IconButton";
function Footer() {
  return (
    <div className="footer">
        <div className="socialMedia">
        <IconButton aria-label="Linkedin.com" onClick={() => window.open('https://www.linkedin.com/in/pablo-alexander-garcia-2b828816b/')}>
          <LinkedInIcon fontSize="large" /> </IconButton>
        </div>
        <p>&copy; 2023 <br/> Z3R0NE.com</p>
    </div>
  )
}

export default Footer;