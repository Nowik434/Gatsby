/** @jsx jsx */
import { jsx } from "theme-ui"
import { graphql } from "gatsby"
import { RiSendPlane2Line } from "react-icons/ri"

import Layout from "../components/layout"
import Seo from "../components/seo"

export const pageQuery = graphql`
  query ContactQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      excerpt(pruneLength: 140)
      frontmatter {
        title
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`

const Contact = ({ data }) => {
  const { markdownRemark, site } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark

  return (
    <Layout className="contact-page" sx={contactStyles.contactPage}>
      <Seo
        title={frontmatter.title}
        description={frontmatter.title + " " + site.siteMetadata.title}
      />
      <div className="wrapper container-page">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <h1>SURF POINT MARINA</h1>

              <p>Adres: dsfdsfd 3,</p>
              <p>84-120 Lublin</p>
              <p>Tel: +48 000 000 000</p>

              <p>Otwarte: 1 maj - 15 wrzesień</p>
              <p>Godz: 09:00 - 19:00</p>
              <p>Mail: aaa@eaaa.com</p>
              <p>Konto do wpłat: Mbank 0000 0000 00000 0000 0000</p>
              <p>WAŻNE: w tytule przelewu proszę wpisać tylko "Rezerwacja + imię i nazwisko"</p>
              <b></b>

              <h3>INSTRUKTOR</h3>
              <p>Jan Kowalski</p>
              <p>Tel: +48 323 323 323</p>
              <p>Mail: aaa@eaaa.com</p>
              <b></b>

              <h3>NASZE DANE REJESTROWE</h3>
              <p>SURF POINT MARINA</p>
              <p>ul. Akacjdsf 7/2, 62-070 Lublin</p>
              <p>NIP: 000000000</p>
              <p>REGON: 0000000</p>


            </div>
            <div className="col-6">
              <h1>{frontmatter.title}</h1>
              <div
                className="description"
                dangerouslySetInnerHTML={{ __html: html }}
              />
              <form
                className="contact-form"
                action="/thanks"
                name="contact"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
              >
                <input type="hidden" name="form-name" value="contact" />
                <p>
                  <label>
                    Imię
              <input type="text" name="name" required />
                  </label>
                </p>
                <p>
                  <label>
                    Adres e-mail
              <input type="email" name="email" required />
                  </label>
                </p>
                <p>
                  <label>
                    Temat
              <input type="text" name="subject" required />
                  </label>
                </p>
                <p>
                  <label>
                    Wiadomość<textarea name="message" required></textarea>
                  </label>
                </p>
                <p className="text-align-right">
                  <button
                    className="button"
                    sx={{
                      variant: "variants.button",
                    }}
                    type="submit"
                  >
                    Wyślij wiadomość{" "}
                    <span className="icon -right">
                      <RiSendPlane2Line />
                    </span>
                  </button>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Contact

const contactStyles = {
  contactPage: {
    input: {
      border: "6px solid",
      borderColor: "inputBorder",
      bg: "inputBackground",
      outline: "none",
    },
    textarea: {
      border: "6px solid",
      borderColor: "inputBorder",
      bg: "inputBackground",
      outline: "none",
    },
  },
}
