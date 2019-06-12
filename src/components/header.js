import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

import { Menu } from "antd"
import * as ROUTES from "../constants/routes"

const Header = ({ logo, headerTheme }) => (
  <React.Fragment>
    <Menu
      mode="horizontal"
      theme={headerTheme}
      style={{ lineHeight: "64px" }}
      inlineCollapsed={false}
    >
      <Menu.Item>
        {/* <h1><Link to="/">{siteTitle}</Link></h1> */}
        <Link to="/">
          <img alt="_logo" src={logo} height="42" width="42"/> <span>TitanPlan</span>
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
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header;
