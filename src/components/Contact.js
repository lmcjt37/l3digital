import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Form from 'components/Form'

const Container = ({ data }) => {
    const companyData = data.contentfulCompany
    return (
        <section id="contact">
            <div className="inner">
                <section>
                    <Form />
                </section>
                <section className="split">
                    <section>
                        <div className="contact-method">
                            <span className="icon alt fa-envelope" />
                            <h3>Email</h3>
                            <a href={'mailto:' + companyData.email}>
                                {companyData.email}
                            </a>
                        </div>
                    </section>
                    <section>
                        <div className="contact-method">
                            <span className="icon alt fa-home" />
                            <h3>Address</h3>
                            <span>
                                {companyData.address.line1}
                                <br />
                                {companyData.address.line2}
                                <br />
                                {companyData.address.county}
                                <br />
                                {companyData.address.country}
                                <br />
                                {companyData.address.postcode}
                            </span>
                        </div>
                    </section>
                </section>
            </div>
        </section>
    )
}

const Contact = props => (
    <StaticQuery
        query={graphql`
            {
                contentfulCompany(
                    contentful_id: { eq: "27CTUp0dfpHdukUkA75P4j" }
                ) {
                    email
                    telephone1
                    address {
                        line1
                        line2
                        county
                        country
                        postcode
                    }
                }
            }
        `}
        render={data => <Container data={data} {...props} />}
    />
)

export default Contact

Container.propTypes = {
    data: PropTypes.shape({
        line1: PropTypes.string,
        line2: PropTypes.string,
        county: PropTypes.string,
        country: PropTypes.string,
        postcode: PropTypes.object,
    }),
}
