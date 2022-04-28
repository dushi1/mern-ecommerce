import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../../containers/Login/actions";

class Header extends Component {
  render() {
    return (
      <header className="head">
        <div style={{ display: "flex" }}>
          <button className="btn" onClick={this.props.openH}>
            <i className="fas fa-bars" style={{ padding: 5 }}></i>
          </button>
          <Link to="/">
            <h1>Store</h1>
          </Link>
        </div>
        <div className="head-icon">
          <Link to="/cart">
            {/* <button className="btn" style={{ margin: "0 5px" }}> */}
            <h6>
              <i
                className="fas fa-shopping-cart"
                style={{ padding: 5, color: "white" }}
              >
                {" "}
                Cart
              </i>
            </h6>
            {/* </button> */}
          </Link>

          <Link to={this.props.user === null ? "/login" : "/profile"}>
            {/* <button className="btn" style={{ margin: "0 5px" }}> */}
            <h6>
              <i className="fas fa-user" style={{ padding: 5, color: "white" }}>
                {" "}
                {this.props.user === null ? "User" : this.props.user.name}
              </i>
            </h6>
            {/* </button> */}
          </Link>
          {this.props.user === null ? null : (
            <h6
              onClick={() => {
                this.props.fetchLogout();
              }}
            >
              <i
                className="fas fa-sign-out-alt"
                style={{ padding: 5, color: "white" }}
              >
                {" "}
                Logout
              </i>
            </h6>
          )}
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.login.userInfo,
  };
};
const dispatchStateToProps = (dispatch) => {
  return {
    fetchLogout: () => dispatch(logout()),
  };
};

export default connect(mapStateToProps, dispatchStateToProps)(Header);
