/** @jsx jsx */
import { jsx } from "theme-ui"
import { graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { RiArrowRightSLine } from "react-icons/ri"
import {
  RiFacebookBoxFill,
  RiTwitterFill,
  RiLinkedinBoxFill,
  RiYoutubeFill,
  RiInstagramFill,
  RiRssFill,
  RiGithubFill,
  RiTelegramFill,
  RiPinterestFill,
  RiSnapchatFill,
  RiSkypeFill,
  RiDribbbleFill,
  RiMediumFill,
  RiBehanceFill,
} from "react-icons/ri"
import { FaWordpress, FaVk } from "react-icons/fa"

import Layout from "../components/layout"
import BlogListHome from "../components/blog-list-home"
import Seo from "../components/seo"
import Icons from "../util/socialmedia.json"

export const pageQuery = graphql`
  query HomeQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        tagline
        featuredImage {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, width: 585, height: 439)
          }
        }
        cta {
          ctaText
          ctaLink
        }
      }
    }
    posts: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { template: { eq: "blog-post" } } }
      limit: 6
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            title
            featuredImage {
              childImageSharp {
                gatsbyImageData(layout: CONSTRAINED, width: 345, height: 260)
              }
            }
          }
        }
      }
    }
  }
`

const HomePage = ({ data }) => {
  const { markdownRemark, posts } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  const Image = frontmatter.featuredImage
    ? frontmatter.featuredImage.childImageSharp.gatsbyImageData
    : ""
  const sIcons = Icons.socialIcons.map((icons, index) => {
    return (
      <div key={"social icons" + index}>
        {icons.icon === "facebook" ? (
          <Link to={icons.url} target="_blank">
            <RiFacebookBoxFill />
          </Link>
        ) : (
          ""
        )}
        {icons.icon === "twitter" ? (
          <Link to={icons.url} target="_blank">
            <RiTwitterFill />
          </Link>
        ) : (
          ""
        )}
        {icons.icon === "linkedin" ? (
          <Link to={icons.url} target="_blank">
            <RiLinkedinBoxFill />
          </Link>
        ) : (
          ""
        )}
        {icons.icon === "youtube" ? (
          <Link to={icons.url} target="_blank">
            <RiYoutubeFill />
          </Link>
        ) : (
          ""
        )}
        {icons.icon === "instagram" ? (
          <Link to={icons.url} target="_blank">
            <RiInstagramFill />
          </Link>
        ) : (
          ""
        )}
        {icons.icon === "rss" ? (
          <Link to={icons.url} target="_blank">
            <RiRssFill />
          </Link>
        ) : (
          ""
        )}
        {icons.icon === "github" ? (
          <Link to={icons.url} target="_blank">
            <RiGithubFill />
          </Link>
        ) : (
          ""
        )}
        {icons.icon === "telegram" ? (
          <Link to={icons.url} target="_blank">
            <RiTelegramFill />
          </Link>
        ) : (
          ""
        )}
        {icons.icon === "pinterest" ? (
          <Link to={icons.url} target="_blank">
            <RiPinterestFill />
          </Link>
        ) : (
          ""
        )}
        {icons.icon === "snapchat" ? (
          <Link to={icons.url} target="_blank">
            <RiSnapchatFill />
          </Link>
        ) : (
          ""
        )}
        {icons.icon === "skype" ? (
          <Link to={icons.url} target="_blank">
            <RiSkypeFill />
          </Link>
        ) : (
          ""
        )}
        {icons.icon === "wordpress" ? (
          <Link to={icons.url} target="_blank">
            <FaWordpress />
          </Link>
        ) : (
          ""
        )}
        {icons.icon === "dribbble" ? (
          <Link to={icons.url} target="_blank">
            <RiDribbbleFill />
          </Link>
        ) : (
          ""
        )}
        {icons.icon === "medium" ? (
          <Link to={icons.url} target="_blank">
            <RiMediumFill />
          </Link>
        ) : (
          ""
        )}
        {icons.icon === "behance" ? (
          <Link to={icons.url} target="_blank">
            <RiBehanceFill />
          </Link>
        ) : (
          ""
        )}
        {icons.icon === "vk" ? (
          <Link to={icons.url} target="_blank">
            <FaVk />
          </Link>
        ) : (
          ""
        )}
      </div>
    )
  })
  return (
    <Layout>
      <Seo />
      <div
        className="bg-img-container"
        style={{
          backgroundImage: `url('./assets/wind3.jpg')`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div className="container home-banner">
        <div className="row g-0">
          <div className="col-md-6">
            <h1
              sx={{
                color: "siteColor",
                textTransform: "uppercase",
                letterSpacing: "4px",
              }}
              className="title"
            >
              {frontmatter.title}
            </h1>
            <p
              className="tagline"
              sx={{
                color: "muted",
              }}
            >
              {frontmatter.tagline}
            </p>
            <div
              className="description"
              dangerouslySetInnerHTML={{ __html: html }}
            />
            <Link
              to={frontmatter.cta.ctaLink}
              className="button"
              sx={{
                variant: "variants.button",
                color: "#000",
              }}
            >
              {frontmatter.cta.ctaText}
              <span className="icon -right">
                <RiArrowRightSLine />
              </span>
            </Link>
            <div
              className="social-icons"
              sx={{
                variant: "variants.socialIcons",
              }}
            >
              {sIcons}
            </div>
          </div>
          <div className="col-md-6">
            {Image ? (
              <GatsbyImage
                image={Image}
                alt={frontmatter.title + " - Featured image"}
                className="featured-image"
              />
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row price">
          <h1 className="text-center">CENNIK</h1>
          <table class="table caption-top">
            <caption></caption>
            <thead>
              <tr>
                <th scope="col">Wypożyczenie sprzętu</th>
                <th scope="col">1h</th>
                <th scope="col">2h</th>
                <th scope="col">3h</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Zestaw windsurfingowy</th>
                <td>50 zł</td>
                <td>90 zł</td>
                <td>120 zł</td>
              </tr>
              <tr>
                <th scope="row">SUP deska z wiosłem</th>
                <td>25 zł</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">Lekcje</th>
                <td>90 zł</td>
                <td>160 zł</td>
                <td></td>
              </tr>
            </tbody>
          </table>
          <table class="table caption-top">
            <caption></caption>
            <thead>
              <tr>
                <th scope="col">Kursy</th>
                <th scope="col">Cena</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Kurs weekendowy 3 dni 12 h</th>
                <td>350 zł</td>
              </tr>
              <tr>
                <th scope="row">Kurs tygodniowy 6 dni 24 h</th>
                <td>600 zł</td>
              </tr>
              <tr>
                <th scope="row">Karnet week 7 dni 10 h</th>
                <td>400 zł</td>
              </tr>
              <tr>
                <th scope="row">Karnet 30 dni 20 h</th>
                <td>700 zł</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <br />
      <br />
      <br />

      <BlogListHome data={posts} />
      <div className="col windy">
        <iframe
          width="100%"
          height="450"
          src="https://embed.windy.com/embed2.html?lat=51.188&lon=22.530&detailLat=25.493&detailLon=-90.945&width=650&height=450&zoom=11&level=surface&overlay=wind&product=ecmwf&menu=&message=true&marker=true&calendar=now&pressure=&type=map&location=coordinates&detail=&metricWind=kt&metricTemp=%C2%B0C&radarRange=-1"
          frameborder="0"
        ></iframe>
      </div>
    </Layout>
  )
}

export default HomePage
