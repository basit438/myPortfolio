import React from "react";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer_container container">
        <h1 className="footer_title">Basit</h1>

        <ul className="footer_list">
          <li>
            {" "}
            <a className="footer_link" href="#About">
              About
            </a>
          </li>
          <li>
            {" "}
            <a className="footer_link" href="#Services">
              Services
            </a>
          </li>
          <li>
            {" "}
            <a className="footer_link" href="github.com/basit438">
              Projects
            </a>
          </li>
        </ul>

        <div className="footer_social">
          <a
            href="https://github.com/basit438"
            className="footer_social-link"
            target="_blank"
          >
            <i class="bx bxl-instagram"></i>
          </a>
          <a
            href="https://www.instagram.com/"
            className="footer_social-link"
            target="_blank"
          >
            <i class="bx bxl-telegram"></i>
          </a>
          <a href="https://twitter.com" className="footer_social-link" target="_blank">
            <i className="uil uil-twitter-alt"></i>
          </a>
        </div>

        <span className="footer_copy">438 Basit, All right reserved </span>
      </div>
    </footer>
  );
}

export default Footer;
