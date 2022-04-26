import React, { Component } from "react";
import Header from "./components/common/header/index";
import SideDrawer from "./components/common/sidedrawer/index";
import Backdrop from "./components/common/backdrop/index";
import "./components/styles/styles.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/common/footer";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Dashboard from "./containers/Dashboard";
import Product from "./containers/Product";
import ScrollToTop from "./components/scrollToTop";
import Cart from "./containers/Cart";
import Login from "./containers/Login";
import Register from "./containers/Register";
import Profile from "./containers/Profile";

class App extends Component {
  constructor() {
    super();
    this.state = {
      open: false,
    };
  }

  render() {
    return (
      <Router>
        <ScrollToTop>
          <div
            style={{
              position: "relative",
              minHeight: "100vh",
              paddingBottom: "50px",
            }}
          >
            <Header
              openH={() => {
                this.setState({
                  open: !this.state.open,
                });
              }}
            />

            <SideDrawer
              open={this.state.open}
              openD={() => {
                this.setState({
                  open: !this.state.open,
                });
              }}
            />
            {this.state.open ? (
              <Backdrop
                onClick={() => {
                  this.setState({
                    open: !this.state.open,
                  });
                }}
              />
            ) : null}
            <main>
              <Container>
                <Route path="/register" component={Register} />
                <Route path="/login" component={Login} />
                <Route component={Dashboard} path="/" exact />
                <Route path="/product/:id" component={Product} />
                <Route path="/cart/:id?" component={Cart} />
                <Route path="/profile" component={Profile} />
              </Container>
            </main>
            <Footer />
          </div>
        </ScrollToTop>
      </Router>
    );
  }
}

export default App;
