/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import TitanLogo from '../images/Group 542.svg';

import TitanHeader from "./header";
import TitanFooter from "./footer";
import { Layout } from "antd";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less';
import "./styles.css";
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
        <Layout.Header>
          <TitanHeader logo={TitanLogo}/>
          {/* <TitanHeader siteTitle={data.site.siteMetadata.title} logo={TitanLogo} headerTheme='dark'/> */}
        </Layout.Header>
        <Content>
          <div className="content">
            {children}
          </div>
        </Content>
        <Footer>
          <TitanFooter />
        </Footer>
      </Layout>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default MainLayout;
