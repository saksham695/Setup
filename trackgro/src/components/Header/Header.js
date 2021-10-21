import React, { useState } from "react";

import Text from "../SharedText/Text";

import "../../App.css";
import { useMutation } from "@apollo/client";
import { ADD_USER_DETAILS } from "../../apollo/queries";

export default function Header({
  companyName,
  componyLogoUrl,
  productId,
  refreshPage,
}) {
  const details = true;
  const [openPopUp, setPopUpState] = useState(false);

  const openDetailsComponent = () => {
    setPopUpState(true);
  };

  const closePopUp = () => {
    setPopUpState(false);
  };

  return (
    <div className="header-container">
      <div>
        <img src={componyLogoUrl} alt="Logo" className="header-left-icon" />
      </div>
      <div className="header-text">
        <Text text={"trackagro.com"} />
      </div>
      {!openPopUp && !!details && (
        <div style={{ alignSelf: "flex-start" }} onClick={openDetailsComponent}>
          <Text
            text="Click Here"
            customClassName="header-left-text-style lato-bold-red"
          />
          <Text
            text="For"
            customClassName="header-left-text-style lato-bold-medium-green"
          />
          <Text
            text="Exclusive"
            customClassName="header-left-text-style lato-bold-green"
          />
          <Text
            text="Offers"
            customClassName="header-left-text-style lato-bold-medium-green"
          />
        </div>
      )}
      {!!details && openPopUp && (
        <div
          style={{
            position: "absolute",
            backgroundColor: "white",
            padding: 20,
            margin: 20,
            borderRadius: 10,
          }}
        >
          <Description
            closeSeeMore={closePopUp}
            companyName={companyName}
            productId={productId}
            refreshPage={refreshPage}
          />
        </div>
      )}
    </div>
  );
}

const Description = ({ closeSeeMore, companyName, productId, refreshPage }) => {
  const SAMPLE_TEXT = `Thank you for your purchase.Please fill the details below to be a registered member of ${companyName} and enjoy the exclusive discounts and privileges`;
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [adddUserDetails, { data, loading, error }] =
    useMutation(ADD_USER_DETAILS);

  const setUserName = (e) => {
    setName(e.target.value);
  };

  const setUserPhoneNumber = (e) => {
    setNumber(e.target.value);
  };

  const onSubmitClicked = async (e) => {
    e.preventDefault();
    const response = await adddUserDetails({
      variables: { input: { orderId: productId, name, phoneNumber: number } },
    });
    console.log("Loading ", loading);
    const { data = {} } = response;
    const { AddUserDetails = "" } = data;
    console.log("Response ", response);
    if (AddUserDetails === "Success") {
      refreshPage();
    }

    closeSeeMore();
  };

  return (
    <div>
      <Text text={SAMPLE_TEXT} customClassName="user-text-style" />
      <div
        style={{ position: "absolute", top: 6, right: 10 }}
        onClick={() => closeSeeMore()}
      >
        <Text text="X" customClassName="close-text-style" />
      </div>
      <div className="form-container">
        <form>
          <div className="input-container">
            <label className="input-label-style">Name</label>{" "}
            <input
              type="text"
              className="input-style"
              value={name}
              onChange={setUserName}
            />
          </div>
          <div className="input-container">
            <label className="input-label-style">Phone Number</label>
            <input
              type="text"
              className="input-style"
              value={number}
              onChange={setUserPhoneNumber}
            />
          </div>
          <button
            type="submit"
            className="submit-button-style"
            onClick={onSubmitClicked}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
