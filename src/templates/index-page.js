import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import Features from '../components/Features'

export const IndexPageTemplate = ({
  image,
  title,
}) => (
  <div>
    <div
      className="full-width-image margin-top-0"
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
        backgroundPosition: `top left`,
        backgroundAttachment: `fixed`,
      }}
    >
    </div>
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="content">
            <div className="content">
              <div className="tile">
                <h1 className="title">{title}</h1>
              </div>
              <div>
                  <p>
                    Our school district has been mismanaged. Over the years our finances have
                    deteriorated to the point of crisis, and most recently with the COVID-19
                    pandemic, but also in terms of the lack of alignment on priorities between
                    the school board and members of the community most directly impacted, namely
                    students, parents and educators. As a member of the community, I have for
                    years been a consistent advocate for better management, but my conscience
                    has pushed me to seek a more active role.
                  </p>
                  <p>
                    You can read more about my <a href="/platform">platform</a>, or connect with my campaign on <a href="https://www.facebook.com/ElectBlakeThomas">facebook</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
    </div>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
