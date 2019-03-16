import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import PropTypes from 'prop-types'
import UtilsHelper from 'helpers/utils'
import Image from 'gatsby-image'

const Container = ({ children, data, classes }) => {
    const bannerName = UtilsHelper.getBannerClass()
    return (
        <section id="banner" className={classes}>
            <Image
                fluid={data[bannerName].childImageSharp.fluid}
                alt="Banner image"
            />
            {children}
        </section>
    )
}

const Banner = props => (
    <StaticQuery
        query={graphql`
            fragment fluidImage on File {
                childImageSharp {
                    fluid(quality: 100, maxWidth: 1440) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            query {
                banner1: file(relativePath: { eq: "banner1.jpg" }) {
                    ...fluidImage
                }
                banner2: file(relativePath: { eq: "banner2.jpg" }) {
                    ...fluidImage
                }
                banner3: file(relativePath: { eq: "banner3.jpg" }) {
                    ...fluidImage
                }
                banner4: file(relativePath: { eq: "banner4.jpg" }) {
                    ...fluidImage
                }
                banner5: file(relativePath: { eq: "banner5.jpg" }) {
                    ...fluidImage
                }
                banner6: file(relativePath: { eq: "banner6.jpg" }) {
                    ...fluidImage
                }
            }
        `}
        render={data => <Container data={data} {...props} />}
    />
)

Container.propTypes = {
    children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    data: PropTypes.object,
    classes: PropTypes.string,
}

export default Banner
