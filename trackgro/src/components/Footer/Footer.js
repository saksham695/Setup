import React from "react";
import CardContainer from "../Card/CardContainer";
import mail from "../../assets/icons/mail.png";
import "./Footer.css";
import GreenEffect from "../BackgroundEffect/GreenEffect";
import Icon from "../Icon/Icon";
import Text from "../SharedText/Text";

import facebook from "../../assets/icons/facebook.png";
import instagram from "../../assets/icons/instagram.png";
import twitter from "../../assets/icons/twitter.png";
import linkdin from "../../assets/icons/linkedin.png";
import heart from "../../assets/icons/heart.png";

import "./Footer.css";

export default function Footer() {
  const SOCIAL_HANDLES = [
    {
      icon: facebook,
      key: "facebook",
    },
    {
      icon: instagram,
      key: "instagram",
    },
    {
      icon: twitter,
      key: "twitter",
    },
    {
      icon: linkdin,
      key: "linkdin",
    },
  ];
  return (
    <div className="card-container">
      <CardContainer customStyle={{ padding: 22, paddingTop: 4 }}>
        <div className="footer-main">
          <MailComponent />
        </div>
        <div className="footer-contact-container">
          <div className="footer-main">
            <Text text="E-mail" customClassName="lato-bold-black" />
            <Text text="about" customClassName="lato-bold-red" />
          </div>
          <div className="footer-main" style={{ marginTop: 4 }}>
            <div style={{ borderBottom: "1px solid #DE5753" }}>
              <Text
                text="hello@trackagro.com"
                customClassName="lato-bold-red"
              />
            </div>
            <Text text="track a product" customClassName="lato-bold-red" />
          </div>
        </div>
        <div className="footer-bottom-container">
          <div className="footer-social-handles">
            {SOCIAL_HANDLES.map(({ icon, key }) => {
              return (
                <Icon
                  name={icon}
                  customClassName="social-handles-icon-style"
                  key={key}
                />
              );
            })}
          </div>
          <div className="footer-bottom">
            <Icon name={heart} customClassName="social-handles-icon-style" />
            <Text
              text="trackagro.com"
              customClassName="lato-thin-red"
              customStyle={{ paddingTop: 4, marginLeft: 8 }}
            />
          </div>
        </div>
      </CardContainer>
    </div>
  );
}

const MailComponent = () => {
  return (
    <>
      <div style={{ position: "relative" }}>
        <div>
          <GreenEffect />
        </div>
        <div style={{ position: "absolute", left: 0, top: 14 }}>
          <Icon name={mail} customClassName="mail-icon" />
        </div>
      </div>
      <div>
        <Text text="Insights" customClassName="lato-bold-black" />
      </div>
    </>
  );
};
