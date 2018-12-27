import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './Header'
import Navigation from './Navigation'
import './layout.css'

const Layout = ({ children }) => (
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
      <Fragment>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Header />
        <div
          style={{
            margin: '0 auto',
            maxWidth: 800,
            padding: '0px 1.0875rem 1.45rem',
            paddingTop: 0,
          }}
        >
          <div
            style={{
              display: 'flex',
            }}
          >
            <div>{children}</div>
            <Navigation
              style={{
                align: 'flex-end',
              }}
            />
          </div>
        </div>
      </Fragment>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
