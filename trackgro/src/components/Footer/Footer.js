import React from "react";
import CardContainer from "../Card/CardContainer";
import mail from "../../assets/icons/mail.png";
import "./Footer.css";
import GreenEffect from "../BackgroundEffect/GreenEffect";
import Icon from "../Icon/Icon";
import Text from "../SharedText/Text";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="card-container">
      <CardContainer customStyle={{ padding: 22, paddingTop: 4 }}>
        <div className="footer-main">
          <div style={{ position: "relative" }}>
            <div>
              <GreenEffect />
            </div>
            <div style={{ position: "absolute", left: 0, top: 14 }}>
              <Icon name={mail} customClassName="mail-icon" />
            </div>
          </div>
          <div>
            <Text text="Insights" />
          </div>
        </div>
      </CardContainer>
    </div>
  );
}
