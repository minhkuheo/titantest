/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import TitanLogo from '../images/TITANPLAN_logomark_primary.svg';

import TitanHeader from "./header";
import TitanFooter from "./footer";
import "./layout.css";

import { Layout } from "antd";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less';

const { Content, Footer } = Layout;

const MainLayout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <Layout>
        <Layout.Header style={{ display: 'flex' }}>
          <TitanHeader logo={TitanLogo} headerTheme='dark'/>
          {/* <TitanHeader siteTitle={data.site.siteMetadata.title} logo={TitanLogo} headerTheme='dark'/> */}
        </Layout.Header>
        <Content style={{ padding: "0 50px" }}>
          <div style={{ background: "#fff", padding: 24, minHeight: 280 }}>
            {children}
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          <TitanFooter />
        </Footer>
      </Layout>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default MainLayout
