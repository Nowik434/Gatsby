/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import { RiHeart2Line } from "react-icons/ri"

const Footer = () => (
  <div
    sx={{
      bg: "siteColor",
      color: "#000",
      "margin-top": "-8px",
    }}
  >
    <div class="container">
      <footer class="pt-5">
        <div class="row pb-4">
          <div class="col-md-4 col-sm-12 p-0">
            <div className="site-logo">
              <Link to="/">
                <img
                  src={"./assets/SPM2.png"}
                  className="img-fluid"
                  className="sfp-logo"
                  alt="logo"
                ></img>
              </Link>
            </div>
          </div>

          <div class="col-md-4 col-sm-12 p-0">
            <h3>Kontakt</h3>
            <ul class="nav flex-column">
              <li class="nav-item">
                Telefon:{" "}
                <a
                  href="tel: 502 450 655"
                  className="mb-1"
                  sx={{ color: "#3cc5ec" }}
                >
                  502 450 655
                </a>
              </li>
              <li class="nav-item">
                E-mail:{" "}
                <a
                  href="mailto:surfpointmarina@gmail.com"
                  sx={{ color: "#3cc5ec" }}
                >
                  tmietlicki@poczta.onet.pl
                </a>
              </li>
              <li class="nav-item">
                <p className="mb-1">Adres: Krężnicka 6, 20-518 Lublin</p>
              </li>
            </ul>
          </div>
        </div>

        <div class="d-flex justify-content-center pt-4 border-top">
          <p style={{ color: "#000", padding: "10px" }}>
            Coded by{" "}
            <Link style={{ color: "#3cc5ec" }} to="https://github.com/Nowik434">
              PN
            </Link>
          </p>
        </div>
      </footer>
    </div>
  </div>
)

export default Footer
