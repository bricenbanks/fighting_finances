import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => {
  return (
        <h1 style={{ margin: 0 }}>
          <Link to="/">
            {siteTitle}
          </Link>
        </h1>
  )

} 

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
