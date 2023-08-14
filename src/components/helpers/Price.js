import React from "react";
import { priceFormatter } from "../../utils/formatter";
const Price = ({ className, oldPrice, newPrice }) => {
  return (
    <div className={className}>
      <span>
        {priceFormatter(newPrice)} <s>{priceFormatter(oldPrice)}</s>
      </span>
    </div>
  );
};

export default Price;
