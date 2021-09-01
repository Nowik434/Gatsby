/** @jsx jsx */
import { jsx } from "theme-ui"

import Layout from "../components/layout"
import Seo from "../components/seo"
// import { Gallery } from "gatsby-theme-gallery";



const GalleryPage = () => {
  export const galleryQuery = graphql`
  query BlogPostQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      excerpt(pruneLength: 148)
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        description
        featuredImage {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    }
  }
`

  // console.log(data)
  // const { markdownRemark, posts } = data // data.markdownRemark holds your post data
  // const { frontmatter, html } = markdownRemark
  // const Image = frontmatter.featuredImage
  //   ? frontmatter.featuredImage.childImageSharp.gatsbyImageData
  //   : ""

  return (
    <Layout>
      <Seo />
      <div className="container home-banner grids sm-2">
        <div className="col">
          {/* <h1 className="title">{frontmatter.title}</h1> */}
        </div>
        <div className="col">
          {/* <Gallery /> */}
          {/* <Img
            fixed={data.file.childImageSharp.fixed}
            alt="Gatsby Docs are awesome"
          /> */}
          {/* {GatsbyImageSharpFluid ? (
            <GatsbyImage
              image={Image}
              alt={frontmatter.title + " - Featured image"}
              className="featured-image"
            />
          ) : (
              ""
            )} */}
        </div>
      </div>
    </Layout>
  )
}

export default GalleryPage
