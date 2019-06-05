import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

import { Menu } from "antd"
import * as ROUTES from "../constants/routes"

const Header = ({ siteTitle, headerTheme }) => (
  <React.Fragment>
    <Menu
      mode="horizontal"
      theme={headerTheme}
      style={{ lineHeight: "64px" }}
    >
      <Menu.Item>
        <h1><Link to="/">{siteTitle}</Link></h1>
      </Menu.Item>
      {/* <Menu.Item key="planning">
        <Link to={ROUTES.PLANNING}>Planning</Link>
      </Menu.Item> */}
      <Menu.SubMenu title="Features">
        <Menu.ItemGroup>
          {/* <Menu.Item key="overview">Overview</Menu.Item> */}
          <Menu.Item key="shift_planning">
            <Link to={ROUTES.SHIFT_PLANNING}>Shift Planning</Link>
          </Menu.Item>
          <Menu.Item key="time_registration">
            <Link to={ROUTES.TIME_REGISTRATiON}>Time Registration</Link>            
          </Menu.Item>
          <Menu.Item key="payroll">
            <Link to={ROUTES.PAYROLL}>Payroll</Link>
          </Menu.Item>
        </Menu.ItemGroup>
      </Menu.SubMenu>
      <Menu.Item key="pricing">
        <Link to={ROUTES.PRICING}>Pricing</Link>
      </Menu.Item>
      {/* <Menu.Item key="company">
        <Link to={ROUTES.COMPANY}>Company</Link>
      </Menu.Item> */}
      <Menu.Item key="cases">
        <Link to={ROUTES.CASES}>Cases</Link>
      </Menu.Item>
      <Menu.Item key="about">
        <Link to={ROUTES.ABOUT}>About us</Link>
      </Menu.Item>
      <Menu.Item key="login">
        <Link to={ROUTES.SIGN_IN}>Login</Link>
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

export default Header
