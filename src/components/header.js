import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";

import { Menu } from "antd";
import * as ROUTES from "../constants/routes";

const Header = ({ logo }) => {
  return (
    <React.Fragment>
      <Menu
        mode="horizontal"
        theme='dark'
        style={{ display: "flex" }}
      >
        <Menu.Item style={{ marginRight: "auto" }}>
          <Link to="/">
            <img alt="_logo" src={logo} height="auto" width="90%" />
          </Link>
        </Menu.Item>

        <Menu.Item key="planning">
          <Link to={ROUTES.FEATURES}>Features</Link>
        </Menu.Item>

        <Menu.Item key="pricing">
          <Link to={ROUTES.PRICING}>Pricing</Link>
        </Menu.Item>

        <Menu.Item key="cases">
          <Link to={ROUTES.CASES}>Cases</Link>
        </Menu.Item>

        <Menu.Item key="about">
          <Link to={ROUTES.ABOUT}>About us</Link>
        </Menu.Item>

        <Menu.Item key="login">
          <a href="https://app.titanplan.com/account/login">Login</a>
        </Menu.Item>
      </Menu>
    </React.Fragment>
  );
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header;
