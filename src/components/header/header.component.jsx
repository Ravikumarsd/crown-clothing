import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import "./header.styles.scss";
import DotsLoading from "../DotsLoading/DotsLoading";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropDown from "../cart-dropdown/cart-dropdown.component";

const Header = ({ currentUser, loading, hidden }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/shop">
        CONTACT
      </Link>
      {currentUser ? (
        loading ? (
          <Link>
            <DotsLoading />
          </Link>
        ) : (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        )
      ) : loading ? (
        <Link>
          <DotsLoading />
        </Link>
      ) : (
        <Link className="option" to="/signin">
          SIGN IN
        </Link>
      )}
      <CartIcon />
      {hidden ? null : <CartDropDown />}
    </div>
  </div>
);

const mapStateToProps = ({
  user: { currentUser, loading },
  cart: { hidden },
}) => {
  return {
    currentUser: currentUser,
    loading: loading,
    hidden: hidden,
  };
};

export default connect(mapStateToProps)(Header);
