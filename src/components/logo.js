import React from "react"
import { Link } from "gatsby"

const Logo = props => (
  <div className="site-logo">
    <Link to="/">
      <img src={'./assets/SPM2.png'} className="img-fluid" className="sfp-logo" alt={props.title}></img>
    </Link>
  </div>
)

export default Logo
