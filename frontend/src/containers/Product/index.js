import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { ProductAction } from './action';

class Product extends Component {
    constructor() {
        super()
        this.state = {
            qty: 1
        }
    }
    componentDidMount() {
        this.props.ProductFetch(this.props.match.params.id)
    }
    render() {
        const { qty } = this.state
        const { loading, error, product } = this.props.products

        const addCartHandler = () => {
            this.props.history.push(`/cart/${this.props.match.params.id}?qty=${qty}`)
        }
        console.log(this.props.Cart);
        return (
            <div>
                {
                    loading ? <h3>Loading ......</h3> : error ? <h3>Error ........{error}</h3> :
                        <div className="flex-col" >
                            <Link to="/" style={{ alignSelf: "flex-start" }}>
                                <strong style={{ fontSize: 20 }}>Go back</strong>
                            </Link>

                            <Row>
                                <Col xl={6} xs={12}>
                                    <img src={product.image} style={{ width: "100%", height: "100%" }} alt={product.category} />
                                </Col>
                                <Col xl={2} xs={12}  >
                                    <div style={{ width: "100%", height: "100%" }}>
                                        <h2>{product.name}</h2>
                                        <div style={{ marginTop: 20 }} >
                                            <h4>Price : ${product.price}</h4>
                                        </div>
                                        <div style={{ marginTop: 20 }} >
                                            <h6>Description : {product.description}</h6>
                                        </div>
                                    </div>
                                </Col>
                                <Col xl={4} xs={12} >
                                    <div style={{ width: "100%", height: "100%" }}>
                                        <div className="flex-row w-100" style={{ borderColor: "black", borderWidth: 0.5, borderStyle: 'solid' }} >
                                            <h4>Price : ${product.price}</h4>
                                        </div>
                                        <div className="flex-row w-100" style={{ borderColor: "black", borderWidth: 0.5, borderStyle: 'solid' }} >
                                            <h4>Status : {product.countInStock === 0 ? "Out of stock" : 'In Stock'}</h4>
                                        </div>
                                        <div className="flex-row w-100" style={{ borderColor: "black", borderWidth: 0.5, borderStyle: 'solid' }} >
                                            <h4>Qty :   </h4>
                                            <select name="cars" id="select" style={{ marginLeft: 10 }} value={qty} onChange={(e) => this.setState({ ...this.state, qty: e.target.value })}>
                                                {
                                                    [...Array(product.countInStock).keys()].map(resp => {
                                                        return <option key={resp + 1} value={resp + 1}>{resp + 1}</option>
                                                    })
                                                }

                                            </select>
                                        </div>
                                        <div className="flex-row w-100" style={{ padding: 10, borderColor: "black", borderWidth: 0.5, borderStyle: 'solid' }} >
                                            <Button type='button' className='w-100 btn-block' disabled={product.countInStock === 0 ? true : false}
                                                onClick={addCartHandler}
                                            >
                                                <div style={{ color: "white !important" }}>Add to cart</div>
                                            </Button>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                }
            </div>
        )

    }
}
const mapStateToProps = (state) => {
    return {
        products: state.Product,
        Cart: state.Cart.cartItems
    }
}
const dispatchStateToProps = (dispatch) => {
    return {
        ProductFetch: (id) => dispatch(ProductAction(id))
    }
}
export default connect(mapStateToProps, dispatchStateToProps)(Product)