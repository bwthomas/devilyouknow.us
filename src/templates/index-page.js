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
                  Our district's track record of focusing on the wants of today over the needs of
                  tomorrow has allowed finances to reach a point of crisis. Without passage of
                  the <a href="http://yeswths.com/">referendum</a> the district will struggle to
                  provide a level of service to the community that honors the effort, investment
                  and engagement that students and teachers bring to school every day. We see this
                  brand of thought most recently with the push to return to classrooms when metrics
                  from both the CDC and the Lake County Health Department told us that we were at
                  "<em><a href='/return-to-school-data'>
                  the highest risk of community transmission in schools</a></em>," but this is a moment
                  decades in the making.
                </p>
                <p>
                  We need District leadership that can do the work to support the community by
                  planning ahead. And yet, district leadership has historically and consistently
                  shown a lack of engagement with the community most directly impacted by their
                  decisions—namely students, parents and educators. It's this lack of engagement
                  that leaves us ill-prepared to meet the moment and makes it that much more
                  critically important that we pass the referendum.
                </p>
                <p>
                  It's been said that "<em>poor planning on your part does not necessitate an
                  emergency on mine.</em>" There's wisdom in this, but it doesn't remove the
                  urgency of the issues and instead invites us to consider who we are. Do we
                  take responsibility as a community ready to meet those challenges?
                </p>
                <p>
                  As a member of the community, I have for years been a consistent advocate for
                  better management, but my conscience has pushed me to seek a more active role.
                  I believe we can meet the moment together, and I plan to do
                  it with the community's support. You can read more about my <a href="/platform">
                  platform</a>, connect with <a href="https://twitter.com/dijjnn">me</a> or my
                  <a href="https://www.facebook.com/ElectBlakeThomas">campaign</a>.
                </p>
                <p>
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
