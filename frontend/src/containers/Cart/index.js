import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { CartAction, RemoveCart } from "./action";

class Cart extends Component {
  constructor() {
    super();
    this.state = {
      qty: 1,
    };
  }
  componentDidMount() {
    const qty = this.props.location.search
      ? Number(this.props.location.search.split("=")[1])
      : 1;
    this.props.CartFetch(this.props.match.params.id, qty);
  }
  render() {
    // const qty = this.props.location.search ? Number(this.props.location.search.split('=')[1]) : 1
    // const { loading, error, product } = this.props.products
    const removeFromCart = (id) => {
      this.props.Remove(id);
    };
    return (
      <div className="flex-row">
        <div>
          <Link to={`/`} style={{ alignSelf: "flex-start" }}>
            <strong style={{ fontSize: 20 }}>Go back</strong>
          </Link>
        </div>
        <div>
          <div>
            {this.props.Cart.map((resp) => {
              return (
                <div style={{ paddingBottom: 30 }}>
                  <div xl={2} xs={12} className="w-100">
                    <img
                      src={resp.image}
                      alt={resp.name}
                      style={{ width: "100%" }}
                    />
                  </div>
                  <div xl={4} xs={12} className="flex-div w-100">
                    <h4>{resp.name}</h4>
                  </div>
                  <div xl={2} xs={4} className="flex-div w-100">
                    <h4>${resp.price}</h4>
                  </div>
                  <div xl={2} xs={4} className="flex-div w-100">
                    <select
                      name="cars"
                      id="select"
                      style={{ marginLeft: 10 }}
                      value={resp.qty}
                      onChange={(e) =>
                        this.props.CartFetch(resp.product, e.target.value)
                      }
                    >
                      {[...Array(resp.countInStock).keys()].map((resp) => {
                        return (
                          <option key={resp + 1} value={resp + 1}>
                            {resp + 1}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                  <div xl={2} xs={4} className="flex-div w-100">
                    <button
                      className="btn"
                      onClick={() => removeFromCart(resp.product)}
                    >
                      <h6>
                        <i
                          className="fas fa-trash-alt"
                          style={{ divor: "white" }}
                        ></i>
                      </h6>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          <div xl={4} xs={12} style={{ width: "100%" }}>
            <h4>
              Subtotal (
              {this.props.Cart.reduce((acc, item) => acc + Number(item.qty), 0)}
              )
            </h4>
            <h4>
              Price{" "}
              {this.props.Cart.reduce(
                (acc, item) => acc + Number(item.qty) * Number(item.price),
                0
              )}
            </h4>
            <button
              type="button"
              className="btn"
              onClick={() => {
                this.props.history.push("/login?redirect=shipping");
              }}
            >
              <div style={{ divor: "white !important" }}>Checkout</div>
            </button>
          </div>
        </div>

        {/* } */}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    Cart: state.Cart.cartItems,
  };
};
const dispatchStateToProps = (dispatch) => {
  return {
    CartFetch: (id, qty) => dispatch(CartAction(id, qty)),
    Remove: (id) => dispatch(RemoveCart(id)),
  };
};
export default connect(mapStateToProps, dispatchStateToProps)(Cart);
