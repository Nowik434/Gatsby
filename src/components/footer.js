/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import { RiHeart2Line } from "react-icons/ri"

const Footer = () => (
  <div sx={{
    bg: "siteColor",
    color: "#000",
    "margin-top": "-8px"
  }}>
    <div class="container">
      <footer class="pt-5">
        <div class="row">
          <div class="col-4 p-0">
            <div className="site-logo">
              <Link to="/">
                <img src={'./assets/SPM2.png'} className="img-fluid" className="sfp-logo" alt="logo"></img>
              </Link>
            </div>
          </div>

          <div class="col-4 p-0">
            <h5>Kontakt</h5>
            <ul class="nav flex-column">
              <li class="nav-item"><p className="mb-1">Telefon: 502 450 655</p></li>
              <li class="nav-item"><p className="mb-1">Adres: Krężnicka 6, 20-518 Lublin</p></li>
            </ul>
          </div>

          <div class="col-4 p-0">
            <h5>Godziny Pracy:</h5>
            <ul class="nav flex-column">
              <li class="nav-item"><p className="mb-1">poniedziałek:10:00–20:00</p></li>
              <li class="nav-item"><p className="mb-1">wtorek:10:00–20:00</p></li>
              <li class="nav-item"><p className="mb-1">środa:10:00–20:00</p></li>
              <li class="nav-item"><p className="mb-1">czwartek:10:00–20:00</p></li>
              <li class="nav-item"><p className="mb-1">piątek:10:00–20:00</p></li>
              <li class="nav-item"><p className="mb-1">sobota:10:00–20:00</p></li>
              <li class="nav-item"><p className="mb-1">niedziela:10:00–20:00</p></li>
            </ul>
          </div>
        </div>

        <div class="d-flex justify-content-center pt-4 border-top">
          <p style={{ color: "#000", padding: "10px" }}>
            Coded by <Link style={{ color: "#3cc5ec" }} to="https://github.com/Nowik434">PN</Link>
          </p>
          <ul class="list-unstyled d-flex">
            <li class="ms-3"><a class="link-dark" href="#"><svg class="bi" width="24" height="24"></svg></a></li>
            <li class="ms-3"><a class="link-dark" href="#"><svg class="bi" width="24" height="24"></svg></a></li>
            <li class="ms-3"><a class="link-dark" href="#"><svg class="bi" width="24" height="24"></svg></a></li>
          </ul>
        </div>
      </footer>
    </div>
  </div>
)

export default Footer