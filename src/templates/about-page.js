import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

export const pageQuery = graphql`
  query AboutQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      excerpt(pruneLength: 140)
      frontmatter {
        title
      }
    }
  }
`
const AboutPage = ({ data }) => {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html, excerpt } = markdownRemark

  return (
    <Layout className="page">
      <Seo title={frontmatter.title} description={excerpt} />
      <div className="wrapper container-page">
        <h1>{frontmatter.title}</h1>
        <div class="container px-4 py-5" id="featured-3">
          <div class="row g-4 py-5">
            <div class="feature col">
              <div class="bg-primary bg-gradient">
                <img src="/assets/sfp1.jpg" style={{ "width": "100%", "height": "220px", "object-fit": "cover", "border-radius": "4px" }} alt="Feature image" />
              </div>
              <h2>WYPOŻYCZALNIA SPRZĘTU</h2>
              <p>SURF POINT MARINA - szkoła bezpiecznego szaleństwa na akwenie. Jeśli chcesz nauczyć się pływać na Windsurfingu lub SUPie</p>
            </div>
            <div class="feature col">
              <div class="bg-primary bg-gradient">
                <img src="/assets/spm3.jpeg" style={{ "width": "100%", "height": "220px", "object-fit": "cover", "border-radius": "4px" }} alt="Feature image" />
              </div>
              <h2>SZKOŁA WINDSURFINGU</h2>
              <p>Organizujemy indywidualne kursy windsurfingu (jeden instruktor z jednym uczniem) oraz grupowe kursy windsurfingowe.</p>
            </div>
            <div class="feature col">
              <div class="bg-primary bg-gradient">
                <img src="/assets/sfp3.jpg" style={{ "width": "100%", "height": "220px", "object-fit": "cover", "border-radius": "4px" }} alt="Feature image" />
              </div>
              <h2>KLUB</h2>
              <p>Playa Marina powstała z miłości do hiszpańskich plaż. Południowy charakter, plaża i woda - to zestaw, który przeniesie Was w zakątki Wysp Kanaryjskich! Spotkajmy się na Krężnickiej 6!</p>
            </div>
          </div>
        </div>
        <article dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </Layout>
  )
}

export default AboutPage
