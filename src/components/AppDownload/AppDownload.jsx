import React from "react";
import "./AppDownload.css";
import { assets } from "../../assets/assets";

const AppDownload = () => {
  return (
    <div className="app-download" id="app-download">
      <div className="app-download-content">
        <div className="app-download-image">
          <img
            src="https://res.cloudinary.com/dkhkrzfz0/image/upload/v1732191813/uqvvo8nhbnvapaojpj4c.png "
            alt="BoyandGirl"
            className="image"
          />
          <img
            src="https://res.cloudinary.com/dkhkrzfz0/image/upload/v1732191813/uqvvo8nhbnvapaojpj4c.png"
            alt="Shadow"
            className="shadow"
          />
        </div>
        <div className="app-download-text">
          <div className="app-tt">
            <img src="https://res.cloudinary.com/dkhkrzfz0/image/upload/v1732252821/mnpw8ydvkgypep60azfe.png" />
            <span>ing is more </span>
          </div>
          <div className="app-down-tt">
            <span>
              {" "}
              <span>Personalised </span>& Instant
            </span>
          </div>
          <p>Download the Order.uk app for faster ordering</p>
          <div className="app-download-platforms">
            <img
              src="https://res.cloudinary.com/dkhkrzfz0/image/upload/v1732200069/y9sipjg1ngk1vnmn2up4.png"
              alt="Download on Play Store"
            />
            <img
              src="https://res.cloudinary.com/dkhkrzfz0/image/upload/v1732200097/r6lge2afk1hblpakupqc.png"
              alt="Download on App Store"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppDownload;
