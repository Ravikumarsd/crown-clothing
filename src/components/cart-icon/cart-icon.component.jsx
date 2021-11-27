import React from "react";
import "./cart-icon.styles.scss";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { toggleCardDropDown } from "../../redux/cart/cart-actions";
import { connect } from "react-redux";

const CartIcon = ({ toggleCardDropDown }) => {
  return (
    <div onClick={toggleCardDropDown}>
      <div className="cart-icon">
        <ShoppingIcon className="shopping-icon" />
        <span className="item-count">0</span>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleCardDropDown: (hidden) => dispatch(toggleCardDropDown(hidden)),
});

export default connect(null, mapDispatchToProps)(CartIcon);
