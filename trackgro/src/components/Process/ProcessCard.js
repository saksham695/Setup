import React from "react";

import BlackEffect from "../BackgroundEffect/BlackEffect";
import BlueEffect from "../BackgroundEffect/BlueEffect";
import GreenEffect from "../BackgroundEffect/GreenEffect";
import RedEffect from "../BackgroundEffect/RedEffect";
import Text from "../SharedText/Text";
import LeftToRightPath from "../SVG/LeftToRightPath";
import RightToLeft from "../SVG/RightToLeft";
import heartFilled from "../../assets/icons/heart_filled.png";
import trusted from "../../assets/icons/trusted_organization.png";
import sales from "../../assets/icons/sales.png";
import health_market from "../../assets/icons/health_market.png";
import passenger from "../../assets/icons/passenger-care.png";
import checked from "../../assets/icons/checked.png";
import logistics from "../../assets/icons/logistics.png";
import carbon_manage from "../../assets/icons/carbon_manage.png";
import raphael_dry from "../../assets/icons/raphael_dry.png";
import carbon_upgrade from "../../assets/icons/carbon_upgrade.png";

import "./Process.css";

export default function ProcessCard(props) {
  const { process = {}, index, totalProcessesCount } = props;
  const { heading, content, imageUrl } = process;
  const isOrignalOrientation = index % 2 === 0;
  const isLast = totalProcessesCount - 1 === index;

  const getBackgroundEffectComponent = (index, totalProcessesCount) => {
    if (totalProcessesCount - 2 === index) {
      return [<BlueEffect />, <RedEffect />, trusted, heartFilled];
    }
    if (index % 4 === 0) {
      return [<RedEffect />, <GreenEffect />, passenger, carbon_upgrade];
    }
    if (index % 4 === 1) {
      return [<GreenEffect />, <RedEffect />, sales, health_market];
    }
    if (index % 4 === 2) {
      return [<GreenEffect />, <BlueEffect />, carbon_manage, raphael_dry];
    }
    if (index % 4 === 3) {
      return [<GreenEffect />, <BlackEffect />, checked, logistics];
    }
  };
  const [effect1, effect2, icon1, icon2] = getBackgroundEffectComponent(
    index,
    totalProcessesCount
  );

  const isLastPath = totalProcessesCount - 2 === index;
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      {isOrignalOrientation && (
        <LeftToRightAlignment
          heading={heading}
          imageUrl={imageUrl}
          content={content}
          isLast={isLast}
          effect1={effect1}
          effect2={effect2}
          isLastPath={isLastPath}
          icon1={icon1}
          icon2={icon2}
        />
      )}
      {!isOrignalOrientation && (
        <RightToLeftAlignment
          heading={heading}
          imageUrl={imageUrl}
          content={content}
          isLast={isLast}
          effect1={effect1}
          effect2={effect2}
          isLastPath={isLastPath}
          icon1={icon1}
          icon2={icon2}
        />
      )}
    </div>
  );
}

const LeftToRightAlignment = ({
  heading,
  imageUrl,
  content,
  isLast,
  effect1,
  effect2,
  isLastPath,
  icon1,
  icon2,
}) => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <ContentComponent heading={heading} content={content} leftText={true} />
        <ProcessImageComponent imageUrl={imageUrl} />
      </div>
      {!isLast && (
        <LeftToRightPath
          effect1={effect1}
          effect2={effect2}
          isLastPath={isLastPath}
          icon1={icon1}
          icon2={icon2}
        />
      )}
    </div>
  );
};

const RightToLeftAlignment = ({
  heading,
  imageUrl,
  content,
  isLast,
  effect1,
  effect2,
  isLastPath,
  icon1,
  icon2,
}) => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <ProcessImageComponent imageUrl={imageUrl} />
        <ContentComponent
          heading={heading}
          content={content}
          leftText={false}
        />
      </div>
      {!isLast && (
        <RightToLeft
          effect1={effect1}
          effect2={effect2}
          isLastPath={isLastPath}
          icon1={icon1}
          icon2={icon2}
        />
      )}
    </div>
  );
};

const ContentComponent = ({ heading, content, leftText }) => {
  const TEXT_ALIGN = leftText ? "left" : "right";
  return (
    <div
      style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div style={{ flex: 2 }}>
        <Text
          text={heading}
          customClassName={"process-header-text"}
          customStyle={{ textAlign: TEXT_ALIGN }}
        />
        <Text
          text={content}
          customStyle={{ textAlign: TEXT_ALIGN, marginTop: 8, marginBottom: 8 }}
          customClassName="loto-normal-grey"
        />
      </div>
      <Text
        text="see more"
        customClassName="lato-bolder-red"
        customStyle={{
          textAlign: TEXT_ALIGN,
          color: "red",
        }}
      />
    </div>
  );
};

const ProcessImageComponent = ({ imageUrl }) => {
  return (
    <div style={{ flex: 1 }}>
      <img src={imageUrl} style={{ height: 200, width: 192 }} alt="process" />
    </div>
  );
};
