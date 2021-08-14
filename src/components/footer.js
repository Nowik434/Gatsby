/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import { RiHeart2Line } from "react-icons/ri"

const Footer = () => (
  <footer
    className="site-footer"
    sx={{
      bg: "siteColor",
      color: "#000",
    }}
  >
    <div className="container">
      <p style={{ color: "#000", padding: "10px" }}>
        Coded by <Link style={{ color: "#3cc5ec" }} to="https://github.com/Nowik434">PN</Link>
      </p>
    </div>
  </footer>
)

export default Footer
