import React from "react";
import Icon from "../Icon/Icon";
import icon1 from "../../assets/icons/passenger-care.png";

export default function RightToLeft({
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
                top: 30,
                left: 0.8 * windowWidth,
              }}
            />
            <ColouredIconComponent
              effect={effect1}
              icon={icon1}
              customStyle={{
                position: "absolute",
                top: 90,
                left: 0.47 * windowWidth,
              }}
            />
            <ColouredIconComponent
              effect={effect2}
              icon={icon2}
              customStyle={{
                position: "absolute",
                top: 100,
                left: 0.74 * windowWidth,
              }}
            />
            <ColouredIconComponent
              effect={effect2}
              icon={icon2}
              customStyle={{
                position: "absolute",
                top: 180,
                left: 0.25 * windowWidth,
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
                left: 0.54 * windowWidth,
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
                left: 0.05 * windowWidth,
              }}
            />
            <ColouredIconComponent
              effect={effect1}
              icon={icon1}
              customStyle={{
                position: "absolute",
                top: 180,
                left: 0.25 * windowWidth,
              }}
            />
          </>
        )}
        <svg
          width="268"
          height="218"
          viewBox="0 0 268 218"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            marginTop: 8,
            marginBottom: 6,
            marginLeft: 0.13 * windowWidth,
          }}
        >
          <path
            d="M267 1C267 28.5294 250.93 96.2941 144.73 128.482C38.5294 160.671 0.999999 199.635 0.999999 217"
            stroke="url(#paint0_linear)"
            stroke-linecap="round"
            stroke-dasharray="4 4"
          />
          <defs>
            <linearGradient
              id="paint0_linear"
              x1="267"
              y1="109"
              x2="0.999998"
              y2="109"
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
