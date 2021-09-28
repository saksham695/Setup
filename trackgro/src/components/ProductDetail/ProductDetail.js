import React from "react";
import { useQuery } from "@apollo/client";
import { GET_ITEM_DETAILS } from "../../apollo/queries";
import CardContainer from "../Card/CardContainer";
import Text from "../SharedText/Text";
import mouse from "../../assets/icons/mouse.png";
import "./ProductDetail.css";
import Header from "../Header/Header";

export default function ProductDetail({ productId }) {
  const { data = {}, loading, error } = useQuery(GET_ITEM_DETAILS);
  const { itemDetail = {} } = data;
  const {
    id,
    imageUrl,
    name,
    nutrition = {},
    user = {},
    componyLogoUrl = "",
    companyName = "",
  } = itemDetail;
  const { calories = "", protein = "", fat = "" } = nutrition;
  return (
    <div>
      <Header
        componyLogoUrl={componyLogoUrl}
        companyName={companyName}
        productId={productId}
      />
      <ProductDetailComponent imageUrl={imageUrl} />
      <div className="card-container">
        <CardContainer customStyle={{ padding: 18 }}>
          <div className="flex-container" style={{ alignItems: "center" }}>
            <Text
              text="Nutrition Facts"
              customClassName="lato-bold-dark-green"
            />
            <Text text="see more" customClassName="lato-bold-red" />
          </div>
          <Text
            text="Serving Size:100gm"
            customClassName="lato-thin-dark-green"
          />
          <div className="flex-container" style={{ marginTop: 22 }}>
            <Text text="Calories" customClassName="lato-green" />
            <Text text={`${calories} gm`} customClassName="lato-bold-green" />
          </div>
          <div className="flex-container">
            <Text text="Protein" customClassName="lato-green" />
            <Text text={`${protein} gm`} customClassName="lato-bold-green" />
          </div>
          <div className="flex-container">
            <Text text="Calories" customClassName="lato-green" />
            <Text text={`${fat} gm`} customClassName="lato-bold-green" />
          </div>
        </CardContainer>
      </div>
      <div>
        <Text
          text={`START YOUR JOURNEY ${name}`}
          customStyle={{ textAlign: "center", marginTop: 18 }}
          customClassName="lato-thin-black"
        />
        <div style={{ textAlign: "center", marginTop: 10 }}>
          <img src={mouse} style={{ height: 45, width: 25 }} alt="process" />
        </div>
      </div>
    </div>
  );
}

const ProductDetailComponent = ({ imageUrl }) => {
  return (
    <div style={{ flex: 1 }}>
      <div style={{ textAlign: "center", marginTop: 28 }}>
        <img src={imageUrl} style={{ height: 150, width: 150 }} alt="process" />
      </div>
    </div>
  );
};
