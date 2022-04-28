import React, { Component } from "react";
import Card from "../../components/common/card";
import { connect } from "react-redux";
import { ProductListAction } from "./action";

class Dashboard extends Component {
  componentDidMount() {
    this.props.ProductFetch();
  }
  render() {
    const { error, loading, products } = this.props.products;
    return (
      <div className="dash-container">
        <h1 style={{ alignSelf: "flex-start" }}>Products</h1>
        {loading ? (
          <h3>Loading ......</h3>
        ) : error ? (
          <h3>Error ........ : {error}</h3>
        ) : (
          <div className="dash-items">
            {products.map((item, index) => {
              return (
                <Card
                  key={index}
                  image={item.image}
                  brand={item.brand}
                  name={item.name}
                  id={item._id}
                />
              );
            })}
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.ProductList,
  };
};
const dispatchStateToProps = (dispatch) => {
  return {
    ProductFetch: () => {
      dispatch(ProductListAction());
    },
  };
};
export default connect(mapStateToProps, dispatchStateToProps)(Dashboard);
