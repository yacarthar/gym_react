import React from "react";
import { priceFormatter } from "../utils/formatter";

const DiscountBadge = ({ className, oldPrice, newPrice }) => {
  const discount = priceFormatter(oldPrice - newPrice);
  return <div className={className}>Giảm {discount}</div>;
};

export default DiscountBadge;
