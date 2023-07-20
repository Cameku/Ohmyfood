import React from "react";
import { FaUtensils, FaHandsHelping } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <h3>
          <em>Ohmyfood</em>
        </h3>
      </div>
      <div className="suggest">
        <p>
          <FaUtensils className="footerIcons" /> Suggest a restaurant
        </p>
      </div>
      <div className="partner">
        <div>
          <FaHandsHelping className="footerIcons" />
        </div>
        <div>
          <p>Become a partner</p>
        </div>
      </div>
      <div className="legal">
        <p>Legal</p>
      </div>
      <div>
        <p>Contact</p>
      </div>
    </footer>
  );
};

export default Footer;
