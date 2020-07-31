import React from "react";
import PricingBoxSm from "./PricingBoxSm";
import PricingBoxLg from "./PricingBoxLg";
function Pricing() {
  return (
    <div className="pricing-container">
      <div className="container wider">
        <h1>
          Cennik <span>Ile to kosztuje?</span>{" "}
        </h1>
        <div className="pricing-divider">
          <PricingBoxSm />
          <PricingBoxLg />
        </div>
      </div>
    </div>
  );
}

export default Pricing;
