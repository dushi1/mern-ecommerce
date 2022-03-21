import React, { Component } from 'react';
import { Button } from "react-bootstrap"
import { connect } from 'react-redux';
import { Link } from "react-router-dom"
import { logout } from "../../../containers/Login/actions"

class Header extends Component {
    render() {
        return (
            <header style={{ paddingBottom: '80px' }}>
                <nav className='head'>
                    <div style={{ display: "flex" }}>
                        <Button variant='outline-danger' onClick={this.props.openH} >
                            <i className='fas fa-bars' style={{ padding: 5 }} ></i>
                        </Button>
                        <Link to="/"><h1>Store</h1></Link>
                    </div>
                    <div className='head-icon'>
                        <Link to="/cart">
                            <Button variant='outline-danger' style={{ margin: '0 5px' }} >
                                <h6><i className='fas fa-shopping-cart' style={{ padding: 5, color: "white" }} > Cart</i></h6>
                            </Button>
                        </Link>

                        <Link to={this.props.user === null ? '/login' : '/profile'}>
                            <Button variant='outline-danger' style={{ margin: '0 5px' }}>
                                <h6><i className='fas fa-user' style={{ padding: 5, color: "white" }} > {this.props.user === null ? 'User' : this.props.user.name}</i></h6>
                            </Button>
                        </Link>
                        {this.props.user === null ? null :
                            <Button variant='outline-danger' style={{ margin: '0 5px', '@media(min-width:500px)': { display: 'none' } }} onClick={() => {
                                this.props.fetchLogout()
                            }}>
                                <h6><i className='fas fa-sign-out-alt' style={{ padding: 5, color: "white" }} > Logout</i></h6>
                            </Button>
                        }
                    </div>
                </nav>
            </header >
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.login.userInfo
    }
}
const dispatchStateToProps = (dispatch) => {
    return {
        fetchLogout: () => dispatch(logout())
    }
}

export default connect(mapStateToProps, dispatchStateToProps)(Header)