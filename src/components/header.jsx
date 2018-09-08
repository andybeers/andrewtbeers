import React from 'react'
import { Link } from 'gatsby'
import { string } from 'prop-types'

const propTypes = {
  siteTitle: string,
}

const defaultProps = {
  siteTitle: 'Andrew Beers',
}

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: 'rebeccapurple',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </div>
)

Header.propTypes = propTypes
Header.defaultProps = defaultProps
export default Header
