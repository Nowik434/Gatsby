import React from "react"
import { Link } from "gatsby"
import { RiArrowLeftSLine, RiCheckboxCircleLine } from "react-icons/ri"

import Seo from "../components/seo"
import Layout from "../components/layout"

const Thanks = () => (
  <Layout className="thanks-page">
    <Seo title="Thank you" />
    <div
      className="wrapper"
      style={{
        textAlign: "center",
      }}
    >
      <RiCheckboxCircleLine
        style={{
          fontSize: "128px",
          color: "var(--primary-color)",
        }}
      />
      <h1>Dziękujemy za wiadomość</h1>
      <p>Dziękujemy że do nas napisałeś. Skontaktujemy się wkrótce</p>
      <Link to="/" className="button">
        <RiArrowLeftSLine className="icon -left" />
        Wróć do strony głównej
      </Link>
    </div>
  </Layout>
)

export default Thanks
