import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className="Footer">
      <h1 className="FooterCallCard">RL</h1>
      <a
        className="FooterGitHub"
        href="https://github.com/richielollis"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </a>
      <a
        className="FooterLinkedIn"
        href="https://www.linkedin.com/in/richie-lollis/"
        target="_blank"
        rel="noopener noreferrer"
      >
        LinkedIn
      </a>
      <p>
        <FontAwesomeIcon className="CopyRight" icon={faCopyright} size="lg" />
        <span>2024 Richie Lollis. All Rights Reserved.</span>
      </p>
    </div>
  );
};

export default Footer;
