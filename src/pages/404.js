import React from "react"
import { Link } from "gatsby"
import { RiArrowLeftSLine, RiBugLine, RiSkullLine } from "react-icons/ri"

import Seo from "../components/seo"
import Layout from "../components/layout"

const NotFound = () => (
  <Layout className="not-found-page">
    <Seo title="Page not found" />
    <div
      className="wrapper"
      style={{
        textAlign: "center",
      }}
    >
      <header>
        <RiSkullLine
          style={{
            fontSize: "128px",
            color: "var(--primary-color)",
          }}
        />
        <h1>Coś poszło nie tak</h1>
        <p>
          Taka strona nie istnieje
        </p>
      </header>
      <Link to="/" className="button">
        <RiArrowLeftSLine className="icon -left" />
        Powrót do strony głównej
      </Link>
      <Link to="/contact" className="button -outline">
        Zgłoś błąd <RiBugLine className="icon -right" />
      </Link>
    </div>
  </Layout>
)

export default NotFound
