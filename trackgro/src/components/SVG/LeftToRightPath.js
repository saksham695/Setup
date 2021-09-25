import React from "react";
import Icon from "../Icon/Icon";

export default function LeftToRightPath({
  effect1,
  effect2,
  isLastPath,
  icon1,
  icon2,
}) {
  const windowWidth = window.innerWidth;
  return (
    <div>
      <div className="left-right-path" style={{ position: "relative" }}>
        {!isLastPath && (
          <>
            <ColouredIconComponent
              effect={effect1}
              icon={icon1}
              customStyle={{
                position: "absolute",
                top: 0,
                left: 0.21 * windowWidth,
              }}
            />
            <ColouredIconComponent
              effect={effect2}
              icon={icon2}
              customStyle={{
                position: "absolute",
                top: 60,
                left: 0.1 * windowWidth,
              }}
            />
            <ColouredIconComponent
              effect={effect1}
              icon={icon1}
              customStyle={{
                position: "absolute",
                top: 100,
                left: 0.4 * windowWidth,
              }}
            />
            <ColouredIconComponent
              effect={effect2}
              icon={icon2}
              customStyle={{
                position: "absolute",
                top: 200,
                left: 0.6 * windowWidth,
              }}
            />
          </>
        )}
        {isLastPath && (
          <>
            <ColouredIconComponent
              effect={effect1}
              icon={icon1}
              customStyle={{
                position: "absolute",
                top: 40,
                left: 0.05 * windowWidth,
              }}
            />
            <ColouredIconComponent
              effect={effect1}
              icon={icon1}
              customStyle={{
                position: "absolute",
                top: 100,
                left: 0.2 * windowWidth,
              }}
            />
            <ColouredIconComponent
              effect={effect2}
              icon={icon2}
              customStyle={{
                position: "absolute",
                top: 107,
                left: 0.4 * windowWidth,
              }}
            />
            <ColouredIconComponent
              effect={effect2}
              icon={icon2}
              customStyle={{
                position: "absolute",
                top: 115,
                left: 0.6 * windowWidth,
              }}
            />
            <ColouredIconComponent
              effect={effect2}
              icon={icon2}
              customStyle={{
                position: "absolute",
                top: 100,
                left: 0.8 * windowWidth,
              }}
            />
            <ColouredIconComponent
              effect={effect2}
              icon={icon2}
              customStyle={{
                position: "absolute",
                top: 190,
                left: 0.48 * windowWidth,
              }}
            />
            <ColouredIconComponent
              effect={effect1}
              icon={icon1}
              customStyle={{
                position: "absolute",
                top: 180,
                left: 0.74 * windowWidth,
              }}
            />
          </>
        )}
        <svg
          width="268"
          height="245"
          viewBox="0 0 268 245"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            marginTop: 8,
            marginBottom: 6,
            marginLeft: 0.13 * windowWidth,
          }}
        >
          <path
            d="M1 1C0.999924 31.9706 17.0698 108.206 123.27 144.418C229.471 180.629 267 224.465 267 244"
            stroke="url(#paint0_linear)"
            stroke-linecap="round"
            stroke-dasharray="4 4"
          />
          <defs>
            <linearGradient
              id="paint0_linear"
              x1="1"
              y1="122.5"
              x2="267"
              y2="122.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#386641" />
              <stop offset="0.328125" stop-color="#386641" />
              <stop offset="0.484375" stop-color="#6DC77A" />
              <stop offset="0.635417" stop-color="#386641" />
              <stop offset="1" stop-color="#386641" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

const ColouredIconComponent = ({ effect, customStyle = {}, icon }) => {
  return (
    <div style={customStyle}>
      {effect}
      <div style={{ position: "absolute", top: 3, left: 3 }}>
        <Icon
          name={icon}
          customClassName="path-icons"
          customStyle={{ height: 26, width: 26 }}
        />
      </div>
    </div>
  );
};
