import React from "react";
import {
  BsFacebook,
  BsInstagram,
  BsSnapchat,
  BsTwitter,
  BsYoutube,
} from "react-icons/bs";
import { AiFillAndroid, AiFillApple } from "react-icons/ai";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="left-side">
        <div className="upper-section">
          <FooterItem
            title="Company info"
            _1st="About SHEIN"
            _2nd="Social Responsibility"
            _3nd="Fashion Blogger"
            _4nd="Supply Chain"
            _5nd="Careers"
            _6nd="Student Discount"
          />
          <FooterItem
            title="Help & support"
            _1st="Shipping info"
            _2nd="Returns "
            _3nd="How To Orders"
            _4nd="How To Track"
            _5nd="Size Guide"
            _6nd="SHEIN VIP"
          />
          <FooterItem
            title="customer care"
            _1st="Contact Us"
            _2nd="Payments & Tax "
            _3nd="How To Orders"
            _4nd="Bonus Points"
          />
        </div>
        <div className="lower-section">
          <p>©2009-2023 SHEIN All Rights Reserved</p>
          <ul>
            <li>Privacy Center</li>|<li>Privacy & Cookie Policy</li>|
            <li>Do Not Sell My Personal Information</li>|
            <li>Terms & Conditions</li>|<li>Copyright Notice</li>|
            <li>Accessibility</li>|<li>Imprint</li>|<li>India</li>
          </ul>
        </div>
      </div>
      <div className="right-side">
        <div className="first-section">
          <div className="left">
            <h5>FIND US ON</h5>
            <div className="icon">
              <a href="https://www.facebook.com/SHEINUS/">
                <BsFacebook />
              </a>
              <a href="https://www.facebook.com/SHEINUS/">
                <BsInstagram />
              </a>
              <a href="https://www.facebook.com/SHEINUS/">
                <BsYoutube />
              </a>
              <a href="https://www.facebook.com/SHEINUS/">
                <BsTwitter />
              </a>
              <a href="https://www.facebook.com/SHEINUS/">
                <BsSnapchat />
              </a>
            </div>
          </div>
          <div className="right">
            <h5>DOWNLOAD SHEIN APP TO SAVE MORE!</h5>
            <div className="icon">
              <a href="https://www.facebook.com/SHEINUS/">
                <AiFillApple />
              </a>
              <a href="https://www.facebook.com/SHEINUS/">
                <AiFillAndroid />
              </a>
            </div>
          </div>
        </div>
        <div className="middle-section">
          <h5>SIGN UP FOR SHEIN STYLE NEWS</h5>
          <div>
            <input type="email" placeholder="Your Email Address" />
            <button>Subscribe</button>
          </div>
        </div>
        <div className="last-section">
          <h5>WE ACCEPT</h5>
          <div>
            <img
              src="https://img.ltwebstatic.com/images2_pi/2018/06/06/15282733431754785346.png"
              alt="payment"
            />
            <img
              src="https://img.ltwebstatic.com/images3_pi/2021/03/09/161528368123dd7a35ad8708b0dfc74b3630526891.png"
              alt="payment"
            />
            <img
              src="https://img.ltwebstatic.com/images2_pi/2018/06/06/15282732803587566708.png"
              alt="payment"
            />
            <img
              src="https://img.ltwebstatic.com/images3_pi/2021/01/15/1610701410b3781f00695b77b833e6b6a5e38331a3.png"
              alt="payment"
            />
            <img
              src="https://sheinsz.ltwebstatic.com/she_dist/images/DMCA-53fc2e1a50.png"
              alt="payment"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

const FooterItem = ({ title, _1st, _2nd, _3nd, _4nd, _5nd, _6nd }) => (
  <ul>
    <h5>{title}</h5>
    <a href="#">
      <li>{_1st}</li>
    </a>
    <a href="#">
      <li>{_2nd}</li>
    </a>
    <a href="#">
      <li>{_3nd} </li>
    </a>
    <a href="#">
      <li>{_4nd}</li>
    </a>
    <a href="#">
      <li>{_5nd ? _5nd : ""}</li>
    </a>
    <a href="#">
      <li>{_6nd ? _6nd : ""}</li>
    </a>
  </ul>
);
