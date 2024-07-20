import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <footer>
      <div className="footer-links">
        <ul>
          <li>
            <a href="/women">Women</a>
          </li>
          <li>
            <a href="/men">Men</a>
          </li>
          <li>
            <a href="/chiffon">Chiffon</a>
          </li>
          <li>
            <a href="/products">Products</a>
          </li>
          <li>
            <a href="/signup">Sign Up</a>
          </li>
        </ul>
      </div>
      <div className="footer-social-media">
        <ul>
          <li>
            <a href="https://www.facebook.com" target="_blank">
              Facebook
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com" target="_blank">
              Twitter
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com" target="_blank">
              Instagram
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com" target="_blank">
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
      <div className="footer-copyright">
        <p>&copy; 2024 Yam-my-shop. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
