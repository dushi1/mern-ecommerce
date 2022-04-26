import React, { Component } from "react";
import Card from "../../components/common/card";
import { Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import { ProductListAction } from "./action";

class Dashboard extends Component {
  componentDidMount() {
    this.props.ProductFetch();
  }
  render() {
    const { error, loading, products } = this.props.products;
    return (
      <div>
        <h1>Products</h1>
        {loading ? (
          <h3>Loading ......</h3>
        ) : error ? (
          <h3>Error ........ : {error}</h3>
        ) : (
          <Row>
            {products.map((item, index) => {
              return (
                <Col
                  key={index}
                  xl={3}
                  sm={6}
                  xs={12}
                  lg={3}
                  md={6}
                  className="flex-col"
                  style={{ padding: 10 }}
                >
                  <Card
                    image={item.image}
                    brand={item.brand}
                    name={item.name}
                    id={item._id}
                  />
                </Col>
              );
            })}
          </Row>
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
