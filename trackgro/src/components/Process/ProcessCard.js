import React from "react";
import Text from "../SharedText/Text";
import LeftToRightPath from "../SVG/LeftToRightPath";
import RightToLeft from "../SVG/RightToLeft";

import "./Process.css";

export default function ProcessCard(props) {
  const { process = {}, index, totalProcessesCount } = props;
  const { heading, content, imageUrl } = process;
  const isOrignalOrientation = index % 2 === 0;
  const isLast = totalProcessesCount - 1 === index;
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      {isOrignalOrientation && (
        <LeftToRightAlignment
          heading={heading}
          imageUrl={imageUrl}
          content={content}
          isLast={isLast}
        />
      )}
      {!isOrignalOrientation && (
        <RightToLeftAlignment
          heading={heading}
          imageUrl={imageUrl}
          content={content}
          isLast={isLast}
        />
      )}
    </div>
  );
}

const LeftToRightAlignment = ({ heading, imageUrl, content, isLast }) => {
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
      {!isLast && <LeftToRightPath />}
    </div>
  );
};

const RightToLeftAlignment = ({ heading, imageUrl, content, isLast }) => {
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
      {!isLast && <RightToLeft />}
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
        // justifyContent: "space-around",
      }}
    >
      <div style={{ flex: 2 }}>
        <Text
          text={heading}
          customClassName={"process-header-text"}
          customStyle={{ textAlign: TEXT_ALIGN }}
        />
        <Text text={content} customStyle={{ textAlign: TEXT_ALIGN }} />
      </div>
      <Text
        text="see more"
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
